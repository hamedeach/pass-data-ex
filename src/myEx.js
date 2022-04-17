import React,{Component} from "react";


class myEX extends Component{
    render(){
        const users = this.props['usersList'];
        const movies = this.props['moviesList'];
        const profiles = this.props['profilesdata'];
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
}

export default myEX;