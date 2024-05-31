var Module = {
  print: (function() {})(),
  printErr: function(text) {
    if (arguments.length > 1)
      text = Array.prototype.slice.call(arguments).join(" ");
    if (0) {
      dump(text + "\n");
    }
  },
  canvas: (function() {
    var canvas = document.getElementById("canvas");
    return canvas;
  })(),
  onRuntimeInitialized: function() {
    function onResize() {
      var canvas = document.getElementById("canvas");
      var container = canvas.parentElement;
      var w;
      var h;

      w = window.innerWidth;
      h = window.innerHeight;

      var r = 600 / 900;

      if (w * r > window.innerHeight) {
        w = Math.min(w, Math.ceil(h / r));
      }
      h = Math.floor(w * r);

      container.style.width = canvas.style.width = w + "px";
      container.style.height = canvas.style.height = h + "px";
      container.style.top = Math.floor((window.innerHeight - h) / 2) + "px";
      container.style.left = Math.floor((window.innerWidth - w) / 2) + "px";
    };
    window.addEventListener('resize', onResize);
    onResize();
  },
};

