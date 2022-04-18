import React from "react";


// use the a statless function instead of class copmonent
const MoviesComponent =(props)=>{
    const users = props['usersList'];
    const movie = props['movie'];
    const profiles = props['profilesdata'];
    const likedusers = profiles.filter(profile => profile.favoriteMovieID == movie.id).map((profileobj) => users[profileobj.userID]);

    return (
        <li key={movie['id']}>
            <div key={movie['id']}>
                <h2>{movie['name']}</h2>
                <p>Liked By:</p>
                <ul>
                    {
                        (likedusers.length === 0) ?
                            (<li> no one like this shit</li>)
                            :
                            (

                                likedusers.map((userobj) => (
                                    <li key={userobj.id}>
                                        {userobj.name}
                                    </li>
                                ))
                            )


                    }
                </ul>
            </div>


        </li>
    )

}



export default MoviesComponent;