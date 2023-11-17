import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import SubredditPage from "./components/SubredditPage/SubredditPage";
import PostList from "./components/PostList/PostList";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/r/:subreddit" element={<SubredditPage />} />
          <Route path="/r/:subreddit/:sortingCriteria" element={<PostList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
