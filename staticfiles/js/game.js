function myMove() {
  var elem = document.getElementById("myAnimation");
  var pos = 50;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 400) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}