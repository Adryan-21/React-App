import { FC } from "react";
import "./feed.css";

export const Feed: FC = (props) => {
  return (
    <div className="content">
      <div className="navbar">
        <div className="search">
          <h2>Search</h2>
          <input type="text" value="" placeholder="search..." />
        </div>
        <button>Add Post</button>
      </div>
      <div className="posts">
        <div className="post">
          <img src="https://via.placeholder.com/150/24f355" alt="" />
          <div className="imageContent">
            <h2>Title</h2>
            <p>desc</p>
          </div>
        </div>

        <div className="post">
          <img src="https://via.placeholder.com/150/24f355" alt="" />
          <div className="imageContent">
            <h2>Title</h2>
            <p>desc</p>
          </div>
        </div>

        <div className="post">
          <img src="https://via.placeholder.com/150/24f355" alt="" />
          <div className="imageContent">
            <h2>Title</h2>
            <p>desc</p>
          </div>
        </div>

        <div className="post">
          <img src="https://via.placeholder.com/150/24f355" alt="" />
          <div className="imageContent">
            <h2>Title</h2>
            <p>desc</p>
          </div>
        </div>

        <div className="post">
          <img src="https://via.placeholder.com/150/24f355" alt="" />
          <div className="imageContent">
            <h2>Title</h2>
            <p>desc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
