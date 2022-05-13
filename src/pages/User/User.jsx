import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../../context/Github/GithubContext';
import './User.scss';
import { IoIosPeople, IoMdPeople } from 'react-icons/io';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { GoGist } from 'react-icons/go';
import RepoItem from '../../components/repo_item/RepoItem';
import { fetchUser, getUserRepos } from '../../context/Github/GithubActions';

function User() {
  const { user, repos, dispatch } = useContext(GithubContext);

  const params = useParams();

  const {
    login,
    avatar_url,
    html_url,
    name,
    location,
    blog,
    bio,
    twitter_username,
    public_repos,
    public_gists,
    followers,
    following,
    type,
    hireable,
  } = user;

  useEffect(() => {
    const getUserRepoData = async () => {
      dispatch({ type: 'SET_LOADING' });
      const user = await fetchUser(params.login);
      console.log(user);
      const repos = await getUserRepos(params.login);
      console.log(repos);
      dispatch({ type: 'GET_USER', payload: user });
      dispatch({ type: 'GET_USER_REPOS', payload: repos });
    };

    getUserRepoData();
    return () => {
      console.log('cleanpu');
      dispatch({ type: 'CLEAR_USER' });
    };
  }, []);

  return (
    <>
      <section className="user-container">
        <div className="avatar">
          <img src={avatar_url} alt="user-avatar" />
        </div>

        <div className="info">
          <div className="name">
            <h2>{name ?? login}</h2>
            <p>{type}</p>
            {hireable != null && <p>{hireable}</p>}
          </div>
          <div className="bio">{bio}</div>
          <a href={html_url} target="_blank">
            VISIT GITHUB PROFILE
          </a>

          <div className="details">
            <div className="location">
              <p>Location</p>
              <p>{location}</p>
            </div>
            <div className="website">
              <p>Website</p>
              <p>{blog}</p>
            </div>
            <div className="twitter">
              <p>Twitter</p>
              <p>{twitter_username}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="followers-repos-details">
        <div className="followers">
          <div>
            <p>Followers</p>
            <h2>{followers}</h2>
          </div>
          <i>
            <IoIosPeople />
          </i>
        </div>
        <div className="following">
          <div>
            <p>Following</p>
            <h2>{following}</h2>
          </div>
          <i>
            <IoMdPeople />
          </i>
        </div>
        <div className="public-repos">
          <div>
            <p>Public repos</p>
            <h2>{public_repos}</h2>
          </div>
          <i>
            <RiGitRepositoryLine />
          </i>
        </div>
        <div className="public-gists">
          <div>
            <p>Public gists</p>
            <h2>{public_gists}</h2>
          </div>
          <i>
            <GoGist />
          </i>
        </div>
      </section>
      <section className="repos-list">
        <h2>Latest Repositories</h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo}></RepoItem>
        ))}
      </section>
    </>
  );
}

export default User;
