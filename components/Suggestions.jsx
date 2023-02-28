import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

const Suggestions = () => {

    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        // generate 15 fake people data
        const data = Array.from({ length: 7 }, () => ({
            name: faker.name.fullName(), 
            avatar: faker.image.avatar(),
            company: faker.company.companyName(),
            id: faker.datatype.uuid()
        }));

        setSuggestions(data);
    }, []);

  return (
    <div className='mt-2 ml-10 p-2'>
        <div className="flex justify-between mb-4">
            <h3 className='text-sm font-bold'>Suggestions for you</h3>
            <button className='text-gray-600 text-sm font-semibold'>See all</button>
        </div>
        {
            suggestions.map((profile) => (
                <div key={profile.id} className="flex items-center justify-between mt-3">
                    <img src={profile.avatar} alt={profile.name} className='h-10 w-10 p-[1.5px] border rounded-full' />
                    <div className="flex-1 ml-4">
                        <h2 className='text-sm font-semibold'>{profile.name}</h2>
                        <h3 className='text-xs text-gray-400'>Works at {profile.company}</h3>
                    </div>
                    <button className='text-sm font-semibold text-blue-400 ml-4'>Follow</button>
                </div>
            ))
        }
    </div>
  )
}

export default Suggestions