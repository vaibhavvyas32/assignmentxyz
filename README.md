
# Assignment

Create a web application using create-react-app:

1. Create a User card grid layout having navbar showing any brand name
2. Add a button in the navbar saying 'Get Users', which makes an API call to get the user data
3. Use https://reqres.in/api/users?page=1 to get the data



## Tech Used For Assignment

1. ReactJs
2. create-react-app
3. For CSS , TailwindCSS
4. Fetch API function
5. hooks such as useState
6. Map Function


# Method Used

For Card I created a layout with help of props to display all fetched data dynamically.

For displaying each data in card I have used map function with 4 props (email,avatar,firstname,lastname) and useState hook for fetching the data using button in navbar with onClick.

For Loader I have used react-spinner library function called CircleLoader. Firstly the loading is set to true so that we only see the data when we click get users.

For Styling I have used tailwindcss.


# Time taken

All the functionality took about 25min approx to implement.
