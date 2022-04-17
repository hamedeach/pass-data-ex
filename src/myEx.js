import React,{Component} from "react";


class myEX extends Component{
    render(){
        const users = this.props['usersList'];
        const movies = this.props['moviesList'];
        const profiles = this.props['profilesdata'];
        return (
            <ol>
                {profiles.map((profile)=>(
                    <li key={profile.id}>{profile.id}</li>
                ))}
            </ol>
        )


    }
}

export default myEX;