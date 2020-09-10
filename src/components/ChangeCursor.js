export default function changeCursor() {
  if (window.scrollY > window.innerHeight * 3) {
    document.querySelector(".ball1Black").style.display = "block";
    document.querySelector(".ballBlack").style.display = "block";
    document.querySelector(".ball1").style.display = "none";
    document.querySelector(".ball").style.display = "none";
  } else {
    document.querySelector(".ball1Black").style.display = "none";
    document.querySelector(".ballBlack").style.display = "none";
    document.querySelector(".ball1").style.display = "block";
    document.querySelector(".ball").style.display = "block";
  }

  if (window.scrollY > window.innerHeight / 2) {
    document.querySelector(".header-navbar").style.display = "none";
  } else {
    document.querySelector(".header-navbar").style.display = "block";
  }
}
