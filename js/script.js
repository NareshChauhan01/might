window.addEventListener('load', function () {
  document.getElementById('nav').style.cssText = "left:0; transition:1.2s ease-in-out"
})

let header = document.querySelector("#header");
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
let value = 60;
console.log(value);

// window height on scroll
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop >= 1100) {
    document.getElementById('pp').style = "position: sticky";
    document.getElementById('hr').style.cssText = `transform: translateY(${value--}px) transition: 1.5s ease-out`

  }
  
  else if (document.documentElement.scrollTop <= 1100) {
    document.getElementById('hr').style.cssText = `transform: translateY(${value}px) transition: 1.5s ease-out`;
  }
})



