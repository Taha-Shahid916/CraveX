const Users = ({ name, location, contact }) => {
    return(
        <div className="user1">
            <h1>Name: {name}</h1>
            <h1>Location: {location}</h1>
            <h1>Contact: {contact}</h1>
        </div>
    )
}

export default Users;