/// NAVBAR
let marker = document.querySelector("#marker");
let item = document.querySelectorAll("nav a");

function indicator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

item.forEach(link => {
  link.addEventListener("mouseover", e => {
    indicator(e.target);
  });
});

/// POPUP

function toggle(e) {
  e.preventDefault();
  document.querySelector("body").classList.toggle("modal");
  document.getElementById("blur").classList.toggle("active");
  document.getElementById("popup").classList.toggle("active");
}

const closeModal = document.querySelectorAll(".close_modal");
const openModal = document.querySelectorAll(".learn_more");

closeModal.forEach(function (btn) {
  btn.addEventListener("click", toggle);
});

openModal.forEach(function (btn) {
  btn.addEventListener("click", toggle);
});

///COUNTERS

const counters = document.querySelectorAll(".num");
const speed = 200;

counters.forEach(num => {
  const updateCount = () => {
    const target = +num.getAttribute("data-target");
    const count = +num.innerText;

    const inc = target / speed;

    if (count < target) {
      num.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };

  updateCount();
});

///GALLARY

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

////BACK TO TOP
var goTopBtn = document.querySelector(".back_to_top");

window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", backToTop);

function trackScroll() {
  var scrolled = window.pageYOffset;
  var coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add("back_to_top-show");
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove("back_to_top-show");
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -30);
    setTimeout(backToTop, 1);
  }
}
