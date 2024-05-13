window.addEventListener('load', function () {
  document.getElementById('nav').style.cssText = "left:0; transition:1.2s ease-in-out"
})

// window.addEventListener('scroll', function () {
//   var header = document.getElementsByClassName('header');
//   if (window.scrollY > 10) {
//     header.classList.add('scrolled');
//   } else {
//     header.classList.remove('scrolled');
//   }
// });


// window.addEventListener('scroll', function () {
//   var header = document.getElementsByClassName('header'); // Selecting the first element with the class 'header'
//   if (window.scrollY > 10) {
//     header.classList.add('scrolled');
//   } else {
//     header.classList.remove('scrolled');
//   }
// });

let header = document.querySelector(".header");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

let newValue;

window.onscroll = function () {
  if (window.innerHeight >= 50 || window.innerHeight) {
    document.getElementsByClassName('intro-bg-2').style = ''
  }
}


let hr = document.getElementById('hr').style.cssText = "transform: translateY(60px)";
