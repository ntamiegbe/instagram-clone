import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

const SideProfile = () => {

    const { data: session } = useSession()

    return (
        <div className='flex items-center justify-between mt-12 ml-10'>
            <Image width={20} height={20} src={session?.user?.image} alt="" className='w-16 h-16 rounded-full border p-[2px]' />
            <div className="flex-1 mx-4">
                <h2 className='font-bold'>{session?.user?.username}</h2>
                {/* <h4 className='text-sm text-gray-400'>Welcome to my life</h4> */}
            </div>
            <button className='text-blue-400 font-semibold' onClick={signOut}>Sign Out</button>
        </div>
    )
}

export default SideProfile