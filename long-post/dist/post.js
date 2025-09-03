// dist/post.js
// This script logs "$x minutes elapsed" forever.

async function logElapsedForever() {
  let minutes = 0;
  while (true) {
    console.log(`${minutes} minutes elapsed`);
    minutes++;
    await new Promise((resolve) => setTimeout(resolve, 60 * 1000));
  }
}

logElapsedForever();
