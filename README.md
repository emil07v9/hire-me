Nursery Attendance Management App

This is a very simple React and TypeScript application that allows a nursery to manage the attendance of children in a group. The application shows a list of children with pagination, checkin and checkout functionality.

Before running the project make sure you have the following installed:

- Node.js (v16.x or later)
- npm (v7.x or later)

Instructions for setup:

1. Clone this repository
2. Install dependencies by running: npm install
3. Create .env file and add the following line: REACT_APP_ACCESS_TOKEN=1127a03c-ed76-41d5-9058-f9ca105c41cf
4. Run the application with: npm start

Design decisions:

1. Components
   I have divided the application into reusable components like ChildCard and ChildrenList.
2. Types
   All typescript interfaces are placed in a 'types' folder for a more clear overview
3. API Calls
   I use Axios to make HTTP requests to the API's. The API token is stored in the .env file for security reasons. Note: In this project, I am still sharing the API access token in the setup instructions. While this works for the purpose of this task, in a real-world, professional setting, it is of course important to avoid exposing sensitive information like API tokens in any public repository or README file.
4. Pagination
   To enhance the performance and the general user experience I have decided to choose a pagination. This makes it simple and useable.
5. Check-in/out
   The app uses the API to check children in and out, handling the API calls when the buttons are clicked.
   The status is tracked locally to disable/enable buttons accordingly.
6. State Management
   React's useState manages the states of children and their check-in status. I fetch the list of children when the component i mounted using useEffect.

   Design note: The design is intentionally kept simple, because the assignment focused on functionality over visual design. The main priority was making the interface visually comprehensible while maintaining clarity, so that users can easily manage the attendance of children. All styling has been applied using TailwindCSS.
