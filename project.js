let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".project-item");
  document.querySelector(".project-slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".project-item");
  document.querySelector(".project-slide").prepend(items[items.length - 1]);
});
