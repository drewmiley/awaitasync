const who = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('scary clown')
    }, 200)
  })
}

const what = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('lurks')
    }, 300)
  })
}

const where = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('in the shadows')
    }, 500)
  })
}

const msg = async () => {
  const [a, b, c] = await Promise.all([who(), what(), where()])
  console.log(`${a} ${b} ${c}`)
}

// scary clown lurks in the shadows <-- after 500ms
msg()
