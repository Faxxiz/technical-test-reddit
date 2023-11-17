import React from "react";
import PostContentRenderer from "./PostContentRenderer";
import "./Post.scss";

const Post = ({ post }) => (
  <div className="post">
    <div className="post-header">
      <h3 className="post-title">{post.data.title}</h3>
      <p className="post-author">Author: {post.data.author}</p>
    </div>
    <div className="post-content">{PostContentRenderer(post)}</div>
  </div>
);

export default Post;
