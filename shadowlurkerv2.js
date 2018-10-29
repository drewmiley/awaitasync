function who() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('scary clown');
      }, 200);
    });
  }
  
  function what() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('lurks');
      }, 300);
    });
  }
  
  function where() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('in the shadows');
      }, 500);
    });
  }

async function msg() {
    const [a, b, c] = await Promise.all([who(), what(), where()]);
  
    console.log(`${ a } ${ b } ${ c }`);
  }
  
  msg(); // scary clown lurks in the shadows <-- after 500ms