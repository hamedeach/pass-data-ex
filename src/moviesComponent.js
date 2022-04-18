import React, { Component } from "react";

class MoviesComponent extends Component {

    render() {
        const users = this.props['usersList'];
        const movie = this.props['movie'];
        const profiles = this.props['profilesdata'];

        return (
            <div>
                <li>
                    <h2>{movie['name']}</h2>
                    





                </li>
            </div>



        )
    }

}
export default MoviesComponent;