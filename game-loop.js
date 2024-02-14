(function (win) {
  win.hexplorer = win.hexplorer || {};

  const sixtyFPS = 1000 / 60;
  const thirtyFPS = 1000 / 30;
  let i = 1;
  let prev;
  let elapsed;

  const gameLoop = (timeStamp) => {
    if (prev === undefined) prev = timeStamp;

    elapsed = timeStamp - prev;

    if (elapsed > thirtyFPS) {
      // console.log(`doing stuff ${++i}, ${sixtyFPS}`);
      //   console.log(hexplorer.queue.dequeue());
    }

    requestAnimationFrame(gameLoop);
  };

  const start = () => requestAnimationFrame(gameLoop);

  win.hexplorer.gameLoop = {
    start,
  };
})(window);
