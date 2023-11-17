import React from "react";
import he from "he";
import YouTube from "react-youtube";

const decodeHTML = (text) => he.decode(text);

const PostContentRenderer = (post) => {
  const MAX_URL_LENGTH = 50;

  if (post.data.url.includes("youtu")) {
    const videoId =
      post.data.url.split("v=")[1] || post.data.url.split("/").pop();
    return <YouTube videoId={videoId} />;
  } else if (post.data.url.includes(".png")) {
    return (
      <div>
        <p className="post-text">{decodeHTML(post.data.selftext)}</p>
        <img src={post.data.url} alt="Post Image" />
      </div>
    );
  }

  const displayUrl =
    post.data.url.length > MAX_URL_LENGTH
      ? `${post.data.url.slice(0, MAX_URL_LENGTH)}...`
      : post.data.url;
  if (post.data.url.includes("reddit.com")) {
    return (
      <div>
        <p className="post-text">{decodeHTML(post.data.selftext)}</p>
        <a href={post.data.url} target="_blank" rel="noopener noreferrer">
          {displayUrl}
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <p className="post-text">{decodeHTML(post.data.selftext)}</p>
        {post.data.url.includes(".jpg") ||
        post.data.url.includes(".jpeg") ||
        post.data.url.includes(".gif") ? (
          <img src={post.data.url} alt="External Post Image" />
        ) : (
          <a href={post.data.url} target="_blank" rel="noopener noreferrer">
            {displayUrl}
          </a>
        )}
      </div>
    );
  }
};

export default PostContentRenderer;
