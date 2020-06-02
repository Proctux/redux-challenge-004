# Frontend Training - Challenge #5 #
Consolidate knowledge on redux, routing and API requests.

## Description ##
In this challenge, you'll learn how to use redux, routing and making API requests. 

## Design: ##
__Login Page:__
  1. https://zpl.io/Vqx4qX5
  2. https://zpl.io/VQq4j6m
  3. https://zpl.io/2y7MAEG
  4. https://zpl.io/aXzqx1P

__Main Page:__
  1. https://zpl.io/V4Jnmrz
  
## Extra Information ##
  * **Cookies library**: https://github.com/bukinoshita/react-cookies
  * **Spinner library**: https://github.com/davidhu2000/react-spinners
  * **Endpoints**:
    * API_URL: `https://api-staging.jungle.rocks/api/v1`
    * LOGIN: `{{API_URL}}/login/`
    * USER: `{{API_URL}}/user/`

## Acceptance criteria ##
1. The user must be able to log in.
2. Show error in case of user providing wrong credentials.
3. The user should be redirected to the main page if logged in.
4. If not logged in, the user should not be allowed to access the main page, being redirected to the login page.
5. Display user data on main page.
6. Allow user to change name. After changing the name, the page should show the current user name (*Update the picture is a bonus*).
7. Allow user to log out.
8. Show loading states on login, logout and update user name (like a spinner).
