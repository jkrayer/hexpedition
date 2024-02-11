(function (win) {
  win.hexplorer = win.hexplorer || {};

  win.hexplorer.lib = {
    inRange: (low, high, num) => num >= low && num <= high,
  };
})(window);
