window.onscroll = function () {
  const header = document.querySelector("header")
  const toTop = document.querySelector("#to-top")
  const fixedNav = header.offsetTop
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed")
    toTop.classList.remove("hidden")
    toTop.classList.add("flex")
  } else {
    header.classList.remove("navbar-fixed")
    toTop.classList.remove("flex")
    toTop.classList.add("hidden")
  }

  // const reveals = document.querySelectorAll(".reveal")

  // for (let i = 0; i < reveal.length; i++) {
  //   let windowHeight = window.innerHeight
  //   let elementTop = reveals[i].getBoundingClientRect().top
  //   let elementVisible = 0

  //   if (elementTop < windowHeight - elementVisible) {
  //     reveals[i].classList.add("active")
  //   }
  // }
}

const hamburger = document.getElementById("hamburger")
const nav = document.querySelector("#nav-menu")
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active")
  nav.classList.toggle("hidden")
})

window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != nav) {
    hamburger.classList.remove("hamburger-active")
    nav.classList.add("hidden")
  }
})

// dark toggle
const darkToggle = document.querySelector("#dark-toggle")
const html = document.querySelector("html")

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark")
    localStorage.theme = "dark"
  } else {
    html.classList.remove("dark")
    localStorage.theme = "light"
  }
})

// dark mode or not
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true
}

// function reveal() {
//   const reveals = document.querySelectorAll(".reveal")
//   for (let i = 0; i < reveal.length; i++) {
//     let windowHeight = window.innerHeight
//     let elementTop = reveals[i].getBoundingClientRect().top
//     let elementVisible = 100
//     if (elementTop < windowHeight + elementVisible) {
//       reveals[i].classList.add("active")
//     }
//   }
// }

// // var elements
// // var windowHeight
// // document.getElementById("content").innerText = "A lot of content to fill up the page. ".repeat(500)

// // function init() {
// //   elements = document.querySelectorAll(".reveal")
// //   windowHeight = window.innerHeight
// // }

// // function checkPosition() {
// //   for (var i = 0; i < elements.length; i++) {
// //     var element = elements[i]
// //     var positionFromTop = elements[i].getBoundingClientRect().top
// //     //console.log(positionFromTop,windowHeight);
// //     if (positionFromTop - windowHeight <= 0) {
// //       element.classList.add("active")
// //     }
// //   }
// // }

// // window.addEventListener("scroll", checkPosition)
// // window.addEventListener("resize", init)

// window.addEventListener("scroll", reveal)
