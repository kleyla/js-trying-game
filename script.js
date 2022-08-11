document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".container div");
  let position = 50;
  squares[position].classList.add("dot");

  function moveRight() {
    squares[position].classList.remove("dot");
    position++;
    position = checkPostion(position);
    squares[position].classList.add("dot");
  }

  function moveLeft() {
    squares[position].classList.remove("dot");
    position--;
    position = checkPostion(position);
    squares[position].classList.add("dot");
  }

  function moveUp() {
    squares[position].classList.remove("dot");
    position = position - 10;
    position = checkPostion(position);
    squares[position].classList.add("dot");
  }

  function moveDown() {
    squares[position].classList.remove("dot");
    position = position + 10;
    position = checkPostion(position);
    squares[position].classList.add("dot");
  }

  function checkPostion(position) {
    if (position >= squares.length) position = 0;
    else if (position < 0) position = squares.length - 1;

    return position;
  }
  function keys(e) {
    if (e.keyCode === 39) {
      // rigth arrow
      moveRight();
    } else if (e.keyCode === 38) {
      // up arrow
      moveUp();
    } else if (e.keyCode === 37) {
      // left arrow
      moveLeft();
    } else if (e.keyCode === 40) {
      // down arrow
      moveDown();
    }
  }

  document.addEventListener("keyup", keys);
});
