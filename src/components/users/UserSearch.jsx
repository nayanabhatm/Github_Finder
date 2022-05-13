import React, { useContext, useState } from 'react';
import './UserSearch.scss';
import GithubContext from '../../context/Github/GithubContext';
import AlertContext from '../../context/Alert/AlertContext';
import Alert from '../layout/Alert/Alert.jsx';
import { searchUsers } from '../../context/Github/GithubActions';

function UserSearch() {
  const { results, dispatch } = useContext(GithubContext);
  const { alert, showAlert } = useContext(AlertContext);

  const [searchText, setSearchText] = useState('');

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (searchText.length > 0) {
      dispatch({ type: 'SET_LOADING' });
      const data = await searchUsers(searchText);
      dispatch({ type: 'GET_USERS', payload: data });
    } else {
      showAlert('Please enter user name', 'error');
    }
    setSearchText('');
  };

  const clearUsersData = () => {
    dispatch({ type: 'CLEAR_USERS' });
  };

  return (
    <div className="user-search">
      {alert != null && <Alert />}
      <form className="user-search-form" onSubmit={handleOnSubmit}>
        <input
          type="search"
          name="Search"
          id="search"
          placeholder="Search"
          value={searchText}
          onChange={handleOnChange}
        />
        <input type="submit" value="Go" id="go-btn" />
      </form>
      {results.length > 0 && (
        <button id="clear-btn" onClick={clearUsersData}>
          Clear
        </button>
      )}
    </div>
  );
}

export default UserSearch;
