import React, { Component } from "react";

class MoviesComponent extends Component {

    render() {
        const users = this.props['usersList'];
        const movie = this.props['movie'];
        const profiles = this.props['profilesdata'];
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

}
export default MoviesComponent;