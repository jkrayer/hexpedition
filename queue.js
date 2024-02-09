(function (win) {
  win.hexplorer = win.hexplorer || {};

  const Queue = () => {
    const q = Object.create(null);
    let uid = -1;
    let headId = 0;
    let tailId = 0;

    const enqueue = (item) => {
      q[++uid] = item;
      tailId = uid;
      headId = q[headId] !== undefined ? headId : tailId;

      return true;
    };

    const dequeue = () => {
      const head = q[headId];
      delete q[headId];

      headId += headId < tailId ? 1 : 0;

      return head;
    };

    return { enqueue, dequeue };
  };

  win.hexplorer.queue = Queue();
})(window);
