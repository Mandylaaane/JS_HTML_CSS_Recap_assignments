import React, { useState, useEffect } from 'react';
import './StylesEffect.css';
// TODO: Create a Component, that does an API call to get characters from Game of Thrones and display them in a list. https://thronesapi.com/api/v2/Characters
// - use the Fetch API to get the data
// - use the useEffect hook to fetch the data when the component mounts
// - use the useState hook to store the data
// - display the data in a list

function FetchDataComponent() {
    const[data,setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
     fetch('https://thronesapi.com/api/v2/Characters')
     .then(response => response.json())
     .then(data => setData(data))
     .catch(err => console.error(err))
     .finally(setIsLoading(false))
    }, []); 

    if(isLoading){
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>Game of Thrones Characters</h2>
            <ul>
                {data?.map(data => (
                    <li key={data.id}>{data.fullName}: {data.title}</li>
                ))}
            </ul>
        </div>     
    );
}

export default FetchDataComponent;


