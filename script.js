let hamburgerMenu = document.querySelector(".hamburger");
let header = document.querySelector(".header");
let mobileMenu = document.querySelector(".mobile");
let show = false;
hamburgerMenu.addEventListener("click", function () {
  header.classList.toggle("show");
  if (show === false) {
    mobileMenu.style.display = "block";
    show = true;
  } else if (show === true) {
    mobileMenu.style.display = "none";
    show = false;
  }
});

// smooth scroll on href links
let anchorlinks = document.querySelectorAll('a[href^="#"]');

for (let item of anchorlinks) {
  // relitere
  item.addEventListener("click", (e) => {
    let hashval = item.getAttribute("href");
    let target = document.querySelector(hashval);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    history.pushState(null, null, hashval);
    e.preventDefault();
  });
}
