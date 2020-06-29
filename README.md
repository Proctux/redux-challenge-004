# React Training - Challenge #003 #

## Description ##

**Challenge goal**: The goal of this challenge is to learn and consolidate knowledge on redux and API requests, focused on javaScript and ReactJS.

**Target level**: For this challenge, you'll need to have previous knowledge on javaScript and ReactJS, as well as Routing.

**Final accomplishment**: By the end of this challenge, you'll be able to create an app with a reducer and api calls.

## Resources: ##
__Design:__
- **Login Page**
  1. https://zpl.io/Vqx4qX5
  2. https://zpl.io/VQq4j6m
  3. https://zpl.io/2y7MAEG
  4. https://zpl.io/aXzqx1P

- **Main Page:**
  1. https://zpl.io/V4Jnmrz
  
__Credentials:__
- **email**: jungle.test@jungledevs.com
- **password**: sup3rpassw0rd

__Endpoints:__
You're going to run a local server for the api, called json-server ([json-server](https://github.com/typicode/json-server), [json-server-auth](https://github.com/jeremyben/json-server-auth)). Additional info on how to run it will be on Instructions to Run
- **Login**: POST API_URL/login: 
  Payload Body:
  ```
  {
    email: YOUR_EMAIL,
    password: YOUR_PASSWORD,
  }
  ```
  * Check credentials provided
- **[Protected Routes]**
  - **Get User**: GET API_URL/600/users/:user_id
  - **Update User**: PATCH API_URL/600/users/:user_id
    Payload Body:
      ```
      {
        name: "Jungle Test",
        avatar: "http://localhost:3000/assets/images/user-avatar.png"
      }
      ```
## Acceptance criteria ##
1. The user must be able to log in.
2. Show error in case of user providing wrong credentials.
3. The user should be redirected to the main page if logged in.
4. If not logged in, the user should not be allowed to access the main page, being redirected to the login page.
5. Display user data on main page.
6. Allow user to change name and avatar. After changing the name, the page should show the current user name.
7. Allow user to log out.
8. Show loading states on login and update user name (like a spinner).

## Prerequisites ##
1. Use Class Components
2. Have Yarn installed
3. Have NPM installed

## Instructions to Run ##
1. Clone the repository and run yarn to install dependencies.
2. Install and run json-server. Your api will be ```http://localhost:{PORT_NUMBER}```.
    <pre><code>
    yarn add -D json-server json-server-auth
    json-server db.json -m ./node_modules/json-server-auth -r routes.json</code></pre>
3. You can change the port the server will run by adding --port PORT_NUMBER to your command, otherwise, it's gonna run on the default port (3000).
4. On a different terminal, run yarn to install dependencies and yarn start to run your app.

## Additional Information ##
1. If you're using chrome to develop your app, check out this cool extension that allows you to see the state of you application: [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en). Be sure to check if the browser of your choice has some extensions that might help you out.
2. For the json-server API,  the routes that contain 600 are routes that need Bearer Authentication and it has to be a resource that the authenticated user own to be able to read/write. e.g. you can only update the user info if you're that user. [Guarded Routes - json-server](https://github.com/jeremyben/json-server-auth#guarded-routes-)
3. json-server API does not support you to upload binary files via formData. For this challenge, you will be required to convert the user avatar to a base64 string, before submitting the new avatar picture to the server.
