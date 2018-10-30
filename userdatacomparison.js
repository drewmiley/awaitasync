var fetch = require("node-fetch");

const getFirstUserDataPromises = (url) => {
  return fetch(url) // get users list
    .then(response => response.json()) // parse JSON
    .then(users => users[0]) // pick first user
    .then(user => fetch(`${url}/${user.id}`)) // get user data
    .then(userResponse => userResponse.json())
    .then(user => console.log(user))
}

getFirstUserDataPromises('https://jsonplaceholder.typicode.com/users')