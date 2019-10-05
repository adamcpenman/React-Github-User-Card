import React from 'react';
import axios from 'axios';
import UserCard from "./Components/UserCard";
import FollowerCards from "./Components/FollowerCards";
import FollowerList from "./Components/FollowersList";

class App extends React.Component{
constructor() {
    super()
    this.state = {
        recentUser: "adamcpenman",
        submitting: false,
        user: {},
        followers: []
    }
}

componentDidMount() {
    this.axiosUser()
}

componentDidUpdate(prevProps, prevState) {
    if (prevState.submitting !== this.state.submitting) {
        this.axiosUser();
        this.setState({ submitting: false});
}
if (prevState.user !== this.state.user) {
        this.axiosFollowers()
}
}

    axiosUser = () => {
        axios
            .get(`https://api.github.com/users/${this.state.recentUser}`)
            .then(response => {
                this.setState({
                user: response.data
            })
            console.log(response)
            })
            .catch(error => {
                console.log('error', error)
            })
        }

        axiosFollowers = () => {
            axios
                .get(`https://api.github.com/users/${this.state.currentUser}/followers`)
                .then(response => {
                    this.setState({
                        followers: response.data
                    })
                })
                .catch(error => {
                    console.log("error", error)
                });
        }

        handleSubmit = event => {
            event.preventDefault();
            this.setState({ submitting: true})
        }

        handleChange = event => {
            this.setState({ recentUser: event.target.value })
        }
        handleFollowerClick = follower => {
            this.setState({ recentUser: follower, submitting: true})
        }

render() {
    return (
        <div> 
            <h1>Github User Card</h1>
            <form onSubmit={event => this.handleSubmit(event)}>
                <input 
                    type="text"
                    value={this.state.recentUser}
                    onChange={event => this.handleChange(event)}
                    />
                    <button>Search</button>
                     </form>
                    <UserCard user={this.state.user}>
                        <FollowerList>
                        {this.state.followers.map(follower => (
                        <FollowerCards
                        key={follower.id}
                        follower={follower}
                        onClick={() => this.handleFollowerClick(follower.login)}
                        />
                        ))}
                        </FollowerList>
                    </UserCard>
           
        
        </div>
    )
}
}

export default App;