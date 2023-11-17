import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useRedditApi from "../../hooks/useRedditAPI";
import Post from "./Post/Post";
import "./PostList.scss";

const PostList = () => {
  const { subreddit, sortingCriteria } = useParams();
  const { posts, loading } = useRedditApi(subreddit, sortingCriteria);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className="post-list-container">
      <h2>Posts from /r/{subreddit}</h2>
      <button className="go-back-button" onClick={goBack}>
        Go Back
      </button>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <ul className="posts">
          {posts.map((post) => (
            <Post key={post.data.id} post={post} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
