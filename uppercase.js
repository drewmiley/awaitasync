const caserUpper = val => {
  return new Promise((resolve, reject) => {
    resolve(val.toUpperCase())
  })
}

const msg = async x => {
  try {
    const msg = await caserUpper(x)
    console.log(msg)
  } catch (err) {
    console.log('Ohh no:', err.message)
  }
}

// HELLO
msg('Hello')

// Ohh no: val.toUpperCase is not a function
msg(34)
