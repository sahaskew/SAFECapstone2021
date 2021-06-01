//App.js includes animations and logic defining the header menu.

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav1 = document.querySelector(".background");
  const navLinkRight = document.querySelector(".navLinkRight");
  const navLinkLeft = document.querySelector(".navLinkLeft");
  if (burger) {
    burger.addEventListener("click", () => {
      nav1.classList.toggle("nav1-active");
      if (navLinkLeft.classList.contains("navLinkLeft")) {
        navLinkLeft.classList.remove("navLinkLeft");
        navLinkLeft.classList.add("navLinkLeftActive");
        navLinkRight.classList.remove("navLinkRight");
        navLinkRight.classList.add("navLinkRightActive");
      } else {
        navLinkLeft.classList.remove("navLinkLeftActive");
        navLinkLeft.classList.add("navLinkLeft");
        navLinkRight.classList.remove("navLinkRightActive");
        navLinkRight.classList.add("navLinkRight");
      }

      //Animate Links
      if (navLinkLeft.style.animation) {
        navLinkLeft.style.animation = ``;
        navLinkRight.style.animation = ``;
      } else {
        navLinkRight.style.animation = `navLinkFade 0.5s ease forwards ${
          0 / 7 + 0.5
        }s`;
        navLinkLeft.style.animation = `navLinkFade 0.5s ease forwards ${
          1 / 7 + 0.5
        }s`;
      }

      burger.classList.toggle("toggle");
    });
  }
};
//Call function
navSlide();
