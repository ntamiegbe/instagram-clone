import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const Stories = () => {

    const [peopleData, setPeopleData] = useState([]);

    const { data: session } = useSession()

    useEffect(() => {
        // generate 15 fake people data
        const data = Array.from({ length: 25 }, () => ({
            name: faker.name.fullName(),
            picture: faker.image.avatar(),
            id: faker.datatype.uuid()
        }));

        setPeopleData(data);
    }, []);

    return (
        <div className='flex space-x-3 mt-3 p-6 overflow-y-hidden overflow-x-scroll bg-white scrollbar-thumb-gray-700 scrollbar-thin'>
            {session && (
                <div className='hover:scale-110 transition-all duration-150 ease-out' key={session.user?.name}>
                    <Image src={session?.user?.image} alt={session?.user?.name} width={50} height={50} className='h-14 w-14 rounded-full p-[1.5px] border-2 border-red-400 cursor-pointer object-contain' />
                    <h1 className='text-xs w-14 truncate text-center'>{session?.user?.name}</h1>
                </div>
            )}
            {peopleData.map((person) => (
                <div className='hover:scale-110 transition-all duration-150 ease-out' key={person.id}>
                    <Image src={person.picture} alt={person.name} width={50} height={50} className='h-14 w-14 rounded-full p-[1.5px] border-2 border-red-400 cursor-pointer object-contain' />
                    <h1 className='text-xs w-14 truncate text-center'>{person.name}</h1>
                </div>
            ))}
        </div>
    )
}

export default Stories