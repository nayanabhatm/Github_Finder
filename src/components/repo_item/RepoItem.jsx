import React from 'react';
import './RepoItem.scss';
import Card from '../card/Card';
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';

function RepoItem({ repo }) {
  return (
    <Card>
      <div className="repo-name">
        <a href={repo.html_url} target="_blank">
          <FaLink />
          {` ${repo.name}`}
        </a>
      </div>
      <div className="repo-details">
        <div className="watchers">
          <FaEye />
          <p>{repo.watchers_count}</p>
        </div>
        <div className="stars">
          <FaStar />
          <p>{repo.stargazers_count}</p>
        </div>
        <div className="open-issues">
          <FaInfo />
          <p>{repo.open_issues}</p>
        </div>
        <div className="forks">
          <FaUtensils />
          <p>{repo.forks}</p>
        </div>
      </div>
    </Card>
  );
}

export default RepoItem;
