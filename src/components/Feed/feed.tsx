import { FC, useEffect, useState } from "react";
import "./feed.css";

export const Feed: FC = (props) => {
  let [search, setSearch] = useState("");
  let [posts, setPosts] = useState([]) as any;
  let [comments, setComments] = useState([]) as any;
  useEffect(() => {
    getData();
  }, []);

  function getCommentsFilter(id: number) {
    const resultsComments = comments.filter((comment: { postId: number }) => {
      return comment.postId === id;
    });
    return resultsComments.map((comment: any) => (
      <li>
        <h4>{comment.email}</h4>
        <p>{comment.body}</p>
      </li>
    ));
  }

  function getPostsFilter() {
    const resultsPosts = posts.filter((post: { title: string }) => {
      return post.title.toLowerCase().includes(search.toLowerCase());
    });
    return resultsPosts.map((post: any) => (
      <div className="post">
        <img src="https://via.placeholder.com/1024/24f355" alt="" />
        <div className="imageContent">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <ul>{getCommentsFilter(post.id)}</ul>
          <div>
            <input type="text" />
            <button>Send</button>
          </div>
        </div>
      </div>
    ));
  }

  async function getData(this: any) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const responseData = await response.json();
    setPosts(responseData);

    const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    const responseCommentsData = await responseComments.json();
    setComments(responseCommentsData);
  }

  function handleChange(event: any) {
    setSearch(event.target.value);
  }

  return (
    <div className="content">
      <div className="navbar">
        <div className="search">
          <h2>Search</h2>
          <input type="text" value={search} onChange={handleChange} placeholder="search..." />
        </div>
        <button>Add Post</button>
      </div>
      <div className="posts">{getPostsFilter()}</div>
    </div>
  );
};

export default Feed;
