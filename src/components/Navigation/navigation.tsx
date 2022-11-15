import { FC } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCompass, faHashtag, faClock, faUser, faGear } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  user: any;
}

export const Navigation: FC<IProps> = (props) => {
  const posts = () => {
    console.log(props.user);

    const posts = Math.floor(Math.random() * 1000000);
    const formatedPosts = posts > 999999 ? `${Math.floor(posts / 1000000)}mln` : posts > 999 ? `${Math.floor(posts / 1000)}k` : posts;
    return formatedPosts;
  };
  const followers = () => {
    const posts = Math.floor(Math.random() * 1000);
    const formatedPosts = posts > 999999 ? `${Math.floor(posts / 1000000)}mln` : posts > 999 ? `${Math.floor(posts / 1000)}k` : posts;
    return formatedPosts;
  };
  const following = () => {
    const posts = Math.floor(Math.random() * 1000);
    const formatedPosts = posts > 999999 ? `${Math.floor(posts / 1000000)}mln` : posts > 999 ? `${Math.floor(posts / 1000)}k` : posts;
    return formatedPosts;
  };
  return (
    <div className="Nav">
      <h1>Instagram</h1>
      <img src="https://cdn.discordapp.com/avatars/248898683293138944/5de60c74394cfa327cd276516391df89.png?size=1024" alt="" />
      <h2>{props.user.name}</h2>
      <table>
        <thead>
          <tr>
            <td>Posts</td>
            <td>Followers</td>
            <td>Following</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{posts()}</td>
            <td>{followers()}</td>
            <td>{following()}</td>
          </tr>
        </tbody>
      </table>

      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> <span>Feed</span>
          </Link>
        </li>
        <li>
          <Link to="explore">
            <FontAwesomeIcon icon={faCompass}></FontAwesomeIcon> <span>Explore</span>
          </Link>
        </li>

        <li>
          <Link to="trendtags">
            <FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon> <span>Trending Tags</span>
          </Link>
        </li>

        <li>
          <Link to="toppost">
            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> <span>Top Post</span>
          </Link>
        </li>

        <li>
          <Link to="people">
            <FontAwesomeIcon icon={faCompass}></FontAwesomeIcon> <span>People</span>
          </Link>
        </li>

        <li>
          <Link to="notification">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> <span>Notification</span>
          </Link>
        </li>

        <li>
          <Link to="settings">
            <FontAwesomeIcon icon={faGear}></FontAwesomeIcon> <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
