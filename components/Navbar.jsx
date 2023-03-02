import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

const Navbar = () => {

    const { data: session } = useSession()
    const [open, setOpen] = useRecoilState(modalState)
    const router = useRouter()

    return (
        <div className="shadow bg-white sticky top-0 z-50">
            <div className='flex px-6 items-center justify-between max-w-6xl mx-auto'>

                <div className="hidden md:inline relative w-20 h-10 cursor-pointer" onClick={() => router.push("/")}>
                    <Image src='https://links.papareact.com/ocw' fill style={{ objectFit: "contain" }} />
                </div>

                <div className="md:hidden relative w-10 h-10 flex-shrink-0 cursor-pointer" onClick={() => router.push("/")}>
                    <Image src='https://links.papareact.com/jjm' fill style={{ objectFit: "contain" }} />
                </div>

                <div className="max-w-xs">
                    <div className="relative p-3 mt-1">
                        <div className="absolute inset-y-0 px-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                        <input type="text" className='bg-gray-50 rounded-md block w-[80%] pl-10 border py-2 focus:ring-black' placeholder='Search' />
                    </div>
                </div>

                <div className="flex justify-end items-center space-x-3">
                    {session ? (
                        <>
                            <div className="relative hidden md:inline hover:scale-125 transition-all duration-150 ease-out">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <div className="text-white bg-red-400 animate-pulse px-2 rounded-full absolute -top-3 left-4">3</div>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:scale-125 transition-all duration-150 ease-out" onClick={() => setOpen(true)}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hidden md:inline hover:scale-125 transition-all duration-150 ease-out">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:scale-125 transition-all duration-150 ease-out md:hidden">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <Image src={session.user.image} alt={session?.user?.name} width={10} height={10} className='h-10 w-10 rounded-full object-contain cursor-pointer' onClick={signOut}/>
                        </>
                    ) : (
                        <button onClick={signIn} className='text-blue-400 font-semibold'>Sign in</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar