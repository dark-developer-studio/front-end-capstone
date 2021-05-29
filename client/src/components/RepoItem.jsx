import React from 'react';

const RepoItem = ({repo}) => (
  <li className="item-inline">
    <a href={repo.user_url}>{repo.username}</a>/<a href={repo.repo_url}>{repo.reponame}</a>
    <p>Stars: {repo.stargazers}</p>
  </li>
)

export default RepoItem;