import React, { useContext } from 'react';
import Card from '../../card/Card';
import PropTypes from 'prop-types';
import './UserItem.scss';
import { Link } from 'react-router-dom';

function UserItem({ user: { login, avatar_url } }) {
  return (
    <Card>
      <section className="user-details">
        <img src={avatar_url} alt="avatar" />
        <div className="user-info">
          <h4>{login}</h4>
          <Link to={`/user/${login}`} className="link">
            Visit profile
          </Link>
        </div>
      </section>
    </Card>
  );
}

UserItem.prototype = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
