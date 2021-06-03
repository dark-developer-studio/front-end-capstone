import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      count: 0
    }

  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos() {
    axios.get('/repos')
      .then(response => response.data)
      .then(resObj => {
        console.log(resObj);
        this.setState({
          repos: resObj.repos,
          count: resObj.count
        });
      })
      .catch(err => console.log(err));
  }

  search(term) {
    axios.post('/repos', { username: term })
      .then(() => {
        console.log(`${term} was searched`);
        this.getRepos();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)} />
      <RepoList repos={this.state.repos} count={this.state.count} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));