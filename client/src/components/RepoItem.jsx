import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => (
  <li className="item-inline">
    <a href={repo.user_url}>{repo.username}</a>
    /
    <a href={repo.repo_url}>{repo.reponame}</a>
    <p>
      Stars:
      {repo.stargazers}
    </p>
  </li>
);

RepoItem.propTypes = {
  repo: PropTypes.shape({
    user_url: PropTypes.string,
    username: PropTypes.string,
    repo_url: PropTypes.string,
    reponame: PropTypes.string,
    stargazers: PropTypes.number
  })
};

RepoItem.defaultProps = {
  repo: 'invalid'
};

export default RepoItem;
