# Hash History Basketball League #

A React app that displays information on a Basketball league. App displays league stats, players, teams and articles.

The purpose of this project is to display the many features of React Router v4 with React.

<!-- MarkdownTOC bracket="round" autoanchor="flase" -->

- [Features](#user-content-features)
- [Dependencies](#user-content-dependencies)
- [Getting Started](#user-content-getting-started)
  - [Locally](#user-content-locally)
  - [Build Project](#user-content-build-project)

<!-- /MarkdownT(_OC -->

[Live version can be found here.](https://hh-basketball.firebaseapp.com/)

## Features ##

- URL Parameters
- Nested routes
- Navigating programmatically
- Query string
- Handling 404
- Ambiguous matches
- Rendering a sidebar
- Customizing own Link component
- Animated transitions
- Code splitting
- High Order Components

## Dependencies ##
- prop-types: (_^15.6.0_),
- query-string:(_^5.0.1_),
- react: (_^16.2.0_),
- react-dom: (_^16.2.0_),
- react-router-dom:(_^4.2.2_),
- react-scripts:(_1.0.17_),
- react-transition-group:(_^2.2.1_),
- slug:(_^0.9.1_)

## Getting Started ##
### Locally ###
1. Clone this repository
2. In terminal, switch current working directory to repository
3. Make sure you have NPM or Yarn installed. Simply install [NodeJs](https://nodejs.org/en/download/) or ``` brew install yarn ```
4. Install packages needed for project by typing in terminal ``` npm i ``` or ``` yarn install ```
5. To view project locally start dev server by typing in terminal ``` npm run start ``` or ``` yarn start ```

### Build Project ###
1. After following instructions for setting up the project locally, to build for production, in your terminal type ``` npm run build ``` or ``` yarn build ```
2. (Optional) If you wish to host the project online, you can use Firebase (firebase-tools can automate this for you.)
  1. Create a [Firebase Account](https://firebase.google.com/) 
  2. Create a Firebase project on your [Firebase console](https://console.firebase.google.com/)
  3. Initialize Firebase project from terminal by typing ``` npm run firebase-init ``` or ``` yarn firebase-init ```
  4. When step iii. runs you will be asked a series of questions
  5. First question, select **Hosting**
  6. Second question, select the project name you created in step ii.
  7. Third question, type **build** as your public directory to use (the production code)
  8. Forth question, type **Y** for firebase to configure project as a single page application
  9. Firebase should now be initialized, to deploy project to Firebase, in your terminal type ``` npm run firebase-deploy ``` or ``` yarn firebase-deploy ```

  IMPORTANT: you need to set proper HTTP caching headers for `service-worker.js` file in `firebase.json` file or you will not be able to see changes after first deployment ([issue #2440](https://github.com/facebookincubator/create-react-app/issues/2440)). It should be added inside `"hosting"` key like next:

  ```
  {
    "hosting": {
      ...
      "headers": [
        {"source": "/service-worker.js", "headers": [{"key": "Cache-Control", "value": "no-cache"}]}
      ]
      ...
  ```

  Now, after you create a production build with `yarn build`, you can deploy it by running `yarn firebase-deploy`.