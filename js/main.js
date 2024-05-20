//toggle class active
const navbar = document.querySelector(".navbar");
// klik humberger
document.querySelector("#hamberger").onclick = () => {
  navbar.classList.toggle("active");
};

// klik diluar side bar bbuat ilangin nav
const hamberger = document.querySelector("#hamberger");

document.addEventListener("click", function (e) {
  if (!hamberger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
