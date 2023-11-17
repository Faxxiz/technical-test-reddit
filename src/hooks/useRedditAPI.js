import { useState, useEffect } from "react";

const useRedditApi = (subreddit, sortingCriteria) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.reddit.com/r/${subreddit}/${sortingCriteria}.json`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data.children);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, [subreddit, sortingCriteria]);

  return { posts, loading };
};

export default useRedditApi;
