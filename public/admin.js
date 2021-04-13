//Admin.js includes animations and logic defining the header menu.

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav1 = document.querySelector('.background');
    const adminIcon = document.querySelector('.adminIcon li');
    const navLinkRight = document.querySelector('.navLinkRight li');
    const navLinkLeft = document.querySelector('.navLinkLeft li');
    


    burger.addEventListener('click', () => {
        nav1.classList.toggle('nav1-active');
    //Animate Links
    if(navLinkLeft.style.animation) {
        adminIcon.style.animation = ``;
        navLinkLeft.style.animation = ``;
        navLinkRight.style.animation = ``;
    } else {
        adminIcon.style.animation = `navLinkFade 0.5s ease forwards ${1/7 + 0.5}s`
        navLinkRight.style.animation = `navLinkFade 0.5s ease forwards ${0/7 + 0.5}s`
        navLinkLeft.style.animation = `navLinkFade 0.5s ease forwards ${1/7 + 0.5}s`
    }

    burger.classList.toggle('toggle');

    });
  }
  //Call function
  navSlide();