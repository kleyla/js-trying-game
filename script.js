document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".container div");
  let position = 50;
  squares[position].classList.add("dot");

  let direction = 1;

  function moveRigth() {
    squares[position].classList.remove("dot");
    position++;
    squares[position].classList.add("dot");
  }
  function moveLeft() {
    squares[position].classList.remove("dot");
    position--;
    squares[position].classList.add("dot");
  }
  function moveUp() {
    squares[position].classList.remove("dot");
    position = position - 10;
    squares[position].classList.add("dot");
  }
  function moveDown() {
    squares[position].classList.remove("dot");
    position = position + 10;
    squares[position].classList.add("dot");
  }
  function keys(e) {
    if (e.keyCode === 39) {
      // rigth arrow
      moveRigth();
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
