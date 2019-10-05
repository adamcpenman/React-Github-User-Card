import React from 'react';
import axios from 'axios';
import UserCard from "./Components/UserCard";
import FollowerCards from "./Components/FollowerCards";
import FollowerList from "./Components/FollowersList";
import styled from "styled-components";

const MainDiv = styled.div`
  background-color: #DABFFF;
  padding-top: 10px;
    padding-bottom: 50px;
`

const StyledDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
    h1 {
        text-align: center;
    }
    form {
        display: flex;
        margin: 2rem; 
        
        input {
            padding: 5px
        }
        button {

        }
    }

`


class App extends React.Component{
constructor() {
    super()
    this.state = {
        recentUser: "adamcpenman",
        submitting: false,
        user: {},
        followers: ['']
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
            console.log("axiosUser", response)
            })
            .catch(error => {
                console.log('error', error)
            })
        }

        axiosFollowers = () => {
            axios
                .get(`https://api.github.com/users/${this.state.recentUser}/followers`)
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
        <MainDiv> 
            <StyledDiv>
            <h1>Search for a Github user</h1>
            <form onSubmit={event => this.handleSubmit(event)}>
                <input 
                    type="text"
                    value={this.state.recentUser}
                    onChange={event => this.handleChange(event)}
                    />
                    {/* <select value={this.state.followers} onChange={this.handleChange}>
                        {this.state.followers.map((items, index) => 
                        <option key={index} value={items}>{`${this.setState.followers}`}</option>)}
                    </select> */}
                    <button>Search</button>
                     </form>
                     </StyledDiv>
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
           
        
        </MainDiv>
    )
}
}

export default App;