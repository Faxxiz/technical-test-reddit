import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  const [popularSubreddits, setPopularSubreddits] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/subreddits/popular.json")
      .then((response) => response.json())
      .then((data) => {
        const subreddits = data.data.children.map(
          (child) => child.data.display_name,
        );
        setPopularSubreddits(subreddits);
      })
      .catch((error) => {
        console.error("Error fetching popular subreddits:", error);
      });
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to Reddit Viewer</h1>
      <div>
        {popularSubreddits.map((subreddit) => (
          <Link key={subreddit} to={`/r/${subreddit}`}>
            <button className="subreddit-button">View /r/{subreddit}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
