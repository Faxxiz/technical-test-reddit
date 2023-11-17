Reddit Posts Viewer
This project is a small React application developed to fetch and display posts from the Reddit API. The application includes a feature to change sorting criteria, allowing users to view posts based on different parameters.

Project Details

1. Setup
   The project was setup using Create React App. This tool was chosen for its simplicity and minimal configuration, allowing rapid development without worrying about build setup or configurations.

2. API Integration
   Utilized the Reddit API (https://www.reddit.com/dev/api) to fetch posts from subreddits specified by users. Handled API requests and responses to ensure proper data retrieval and error handling.

3. List Display
   Implemented a component to render a list of posts. Each post item displays essential information such as title, text, and author for a clear view of the posts.

4. Sorting Button/Dropdown
   There is a page rendering the description of a subreddit, where you can select the newest or most recent posts.

5. URL Handling
   Implemented React Router to manage and update URLs based on selected subreddits and sorting criteria.

6. Styling
   Styled the application using SCSS to enhance maintainability, readability, and modularity of the stylesheets. SCSS was chosen for its features like nesting, variables, and mixins, allowing for a more organized and scalable styling approach. Even though it didn't require its features for this sample project
