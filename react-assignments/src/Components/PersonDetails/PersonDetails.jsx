function PersonDetails ({person}) {

    return (
        <div>
            <br/>
            <h2>Person Details</h2>
            <h2>Name: {person.name}</h2>
            <h2>Age: {person.info.age}</h2>
            <h2>City: {person.info.city}</h2>
            <h2>Job: {person.info.job}</h2>
            <h2>Hobbies: {person.info.hobbies.join(', ')}</h2>
        </div>
    )
}

export default PersonDetails;