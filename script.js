//Reval elements on scroll
function revealOnScroll() {
  const reveal = document.querySelectorAll(".reveal");

  const windowHeight = window.innerHeight;
  const revealPoint = 100; //how early it reveals

  reveal.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}
//Run on scroll

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll());

//Run once on pageload
revealOnScroll();
