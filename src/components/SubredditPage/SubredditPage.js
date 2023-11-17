import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./SubredditPage.scss";

const SubredditPage = () => {
  const { subreddit } = useParams();
  const [subredditInfo, setSubredditInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.reddit.com/r/${subreddit}/about.json`)
      .then((response) => response.json())
      .then((data) => {
        setSubredditInfo(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching subreddit info:", error);
        setLoading(false);
      });
  }, [subreddit]);

  const handleGoBackHome = () => navigate("/");

  return (
    <div className="subreddit-page">
      <button className="go-back-button" onClick={handleGoBackHome}>
        Go Back Home
      </button>
      <h2>/r/{subreddit}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p className="subreddit-title">Title: {subredditInfo.title}</p>
          <p className="subreddit-description">
            Description: {subredditInfo.public_description}
          </p>
          <p className="subreddit-subscribers">
            Subscribers: {subredditInfo.subscribers}
          </p>
          <h3 className="view-posts-header">View Posts:</h3>
          <ul className="posts-list">
            <li>
              <Link to={`/r/${subreddit}/new`} className="post-link">
                Newest Posts
              </Link>
            </li>
            <li>
              <Link to={`/r/${subreddit}/top`} className="post-link">
                Top Posts
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SubredditPage;
