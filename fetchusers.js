const fetch = require('node-fetch');

const fetchUsers = async endpoint => {
  const res = await fetch(endpoint)
  const data = await res.json()
  const usernames = data.map(user => user.username)
  console.log(usernames)
}

fetchUsers('https://jsonplaceholder.typicode.com/users');