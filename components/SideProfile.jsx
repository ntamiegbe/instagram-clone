import React from 'react'

const SideProfile = () => {
    return (
        <div className='flex items-center justify-between mt-12 ml-10'>
            <img src="https://links.papareact.com/jjm" alt="" className='w-16 h-16 rounded-full border p-[2px]' />
            <div className="flex-1 mx-4">
                <h2 className='font-bold'>Ntami Egbe</h2>
                <h4 className='text-sm text-gray-400'>Welcome to my life</h4>
            </div>
            <button className='text-blue-400 font-semibold'>Sign Out</button>
        </div>
    )
}

export default SideProfile