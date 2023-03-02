import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef, useState } from 'react'
import { db, storage } from '../firebase'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'

const Modal = () => {

    const { data: session } = useSession()
    const [open, setOpen] = useRecoilState(modalState)
    const filePickerRef = useRef(null)
    const captionRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)

    const uploadPost = async () => {
        if (loading) return

        setLoading(true)

        // 1. Create a post and add it firestore 'posts' collection
        // 2. Get the post ID for the newly created post
        // 3. Upload the image to firebase storage with the post ID
        // 4. Get a download URL from firebase storage and update the original post with image

        const docRef = await addDoc(collection(db, 'posts'), {
            username: session.user?.username,
            caption: captionRef.current.value,
            profileImage: session.user?.image,
            timestamp: serverTimestamp()
        })

        const imageRef = ref(storage, `posts/${docRef.id}/image`)

        await uploadString(imageRef, selectedFile, "data_url").then(async snapshot => {
            const downloadURL = await getDownloadURL(imageRef)
            await updateDoc(doc(db, 'posts', docRef.id), {
                image: downloadURL
            })
        })

        setOpen(false)
        setLoading(false)
        setSelectedFile(null)

    }

    const addImageToPost = (e) => {
        const reader = new FileReader()
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-hidden"
                onClose={setOpen}
            >
                <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <span className='hidden sm:inline-block sm:align-middle sm:h-screen'>
                        &#8203
                    </span>

                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        enterTo='opacity-100 translate-y-0 sm:scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                        leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
                            <div className="">

                                {selectedFile ? (
                                    <img src={selectedFile} alt="Selected File" onClick={() => setSelectedFile(null)} className='w-full object-contain cursor-pointer h-[30vh]' />
                                ) : (
                                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 cursor-pointer border border-blue-700" onClick={() => filePickerRef.current.click()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-700">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                        </svg>
                                    </div>
                                )}


                                <div className="">

                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            Upload a photo
                                        </Dialog.Title>

                                        <div className="">
                                            <input type="file" hidden ref={filePickerRef} onChange={addImageToPost} />
                                        </div>

                                        <div className="mt-2">
                                            <input type="text" className='bg-gray-50 rounded-md block w-full pl-10 border py-2' ref={captionRef} placeholder='Please enter a caption' />
                                        </div>
                                    </div>

                                    <div className="mt-5 sm:mt-6">
                                        <button className='inline-flex justify-center w-full rounded-lg shadow-sm px-4 py-2 bg-blue-800 text-base font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300' onClick={uploadPost} disabled={!selectedFile}>
                                            {loading ? "Uploading" : "Upload Post"}
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Modal