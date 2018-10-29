function scaryClown() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('scary clown');
      }, 2000);
    });
  }
  
  async function msg() {
    const msg = await scaryClown();
    console.log('Message:', msg);
  }
  
  msg(); // Message: scary clown <-- after 2 seconds