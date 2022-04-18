import React from "react";

// use the stateless function instead of the class component
const myEX = (props)=>{
    const users = props['usersList'];
    const movies = props['moviesList'];
    const profiles = props['profilesdata'];
    return (
        <ol>
            {profiles.map((profile)=>(
                <li key={profile.id}>{
                    //get user name from the users list by the profile number 
                    `${users[profile.userID].name}'s favorite movie is ${movies[profile.favoriteMovieID].name}`
                }</li>
            ))}
        </ol>
    )
}



export default myEX;