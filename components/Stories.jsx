import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

const Stories = () => {

    const [peopleData, setPeopleData] = useState([]);

    useEffect(() => {
        // generate 15 fake people data
        const data = Array.from({ length: 25 }, () => ({
            name: faker.name.fullName(),
            picture: faker.image.avatar(),
        }));
        
        setPeopleData(data);
    }, []);

  return (
      <div>
          <h1>Fake People Data</h1>
          <ul>
              {peopleData.map((person) => (
                  <li key={person.name}>
                      <img src={person.picture} alt="Profile" />
                      {person.name}
                  </li>
              ))}
          </ul>
      </div>
    )
}

export default Stories