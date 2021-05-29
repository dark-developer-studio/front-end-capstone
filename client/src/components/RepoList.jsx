import React from 'react';
import RepoItem from './RepoItem.jsx';

const RepoList = (props) => (
  <div>
    <h4>Top Repositories</h4>
    <p>There are {props.count} repos.</p>
    <ol>
      {props.repos.map(repo => <RepoItem repo={repo} key={repo.id} />)}
    </ol>
  </div>
)

export default RepoList;