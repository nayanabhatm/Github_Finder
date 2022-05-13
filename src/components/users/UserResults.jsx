import { React, useContext } from 'react';
import UserItem from './UserItem/UserItem';
import './UserResults.scss';
import GithubContext from '../../context/Github/GithubContext';

function UserResults() {
  const { results, isLoading } = useContext(GithubContext);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="grid">
      {results.length > 0 &&
        results.map((result) => {
          return <UserItem key={result.id} user={result} />;
        })}
    </div>
  );
}
export default UserResults;
