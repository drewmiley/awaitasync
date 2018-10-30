var fetch = require("node-fetch");

const getFirstUserDataPromises = (url) => {
  return fetch(url) // get users list
    .then(response => response.json()) // parse JSON
    .then(users => users[0]) // pick first user
    .then(user => fetch(`${url}/${user.id}`)) // get user data
    .then(userResponse => userResponse.json())
}

const userDataPromises = getFirstUserDataPromises('https://jsonplaceholder.typicode.com/users')

userDataPromises.then(console.log)

const getFirstUserDataAwaitAsync = async (url) => {
  const response = await fetch(url) // get users list
  const users = await response.json() // parse JSON
  const user = users[0] // pick first user
  const userResponse = await fetch(`${url}/${user.id}`) // get user data
  const userData = await userResponse.json()
  return userData
}

const userDataAwaitAsync = getFirstUserDataAwaitAsync('https://jsonplaceholder.typicode.com/users')

userDataAwaitAsync.then(console.log)
