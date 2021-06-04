import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    const { onSearch } = this.context;
    const { term } = this.state;
    onSearch(term);
  }

  render() {
    const { terms } = this.state;
    return (
      <div>
        <h4>Add more repos!</h4>
        Enter a github username:
        <input value={terms} onChange={this.onChange.bind(this)} />
        <button type="button" onClick={this.search.bind(this)}> Add Repos </button>
      </div>
    );
  }
}

export default Search;
