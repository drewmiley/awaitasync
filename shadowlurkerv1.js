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

async function msg () {
  const a = await who()
  const b = await what()
  const c = await where()

  console.log(`${a} ${b} ${c}`)
}

// scary clown lurks in the shadows <-- after 1 second
msg()
