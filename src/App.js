import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import AppContainer from './components/appContainer';
import Api from './components/api';

class App extends Component {

  constructor() {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }
  }

  async handleSearch(e) {
      const value = e.target.value
      const keyCode = e.which || e.keyCode;
      const ENTER = 13;
      if(keyCode === ENTER){
          await Api.get(`users/${value}`).then((response) => {
            this.setState({
              userinfo: {
                userName: response.data.name,
                login: response.data.login, 
                userAvatarURL: response.data.avatar_url, 
                reposNum: response.data.public_repos, 
                followers: response.data.followers, 
                following: response.data.following
              }
            });
          });          
      }
  }

  async getRepos(){
    await Api.get(`users/${this.state.userinfo.login}/repos`)
      .then((response) => {
        this.setState({repos: response.data});
      })
  }

  async getStarred(){
    await Api.get(`users/${this.state.userinfo.login}/starred`)
      .then((response) => {
        this.setState({starred: response.data});
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppContainer 
            userinfo={this.state.userinfo}
            repos={this.state.repos}
            starred={this.state.starred}
            handleSearch={(e) => this.handleSearch(e)}
            getRepos={() => this.getRepos()}
            getStarred={() => this.getStarred()}
          />
        </header>
      </div>
    );
  }
}

export default App;
