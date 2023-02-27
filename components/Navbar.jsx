import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex px-6 py-3 items-center justify-between max-w-6xl mx-auto'>

            <div className="w-4 h-4">
                <Image src='https://links.papareact.com/ocw' fill/>
            </div>

            <div className="">
                2
            </div>

            <div className="">
                3
            </div>

        </div>
    )
}

export default Navbar