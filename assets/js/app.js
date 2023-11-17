let mobile = document.querySelector(".mobile")
let menu = document.querySelector(".menu")

menu.addEventListener("click",function(){
  mobile.classList.toggle("view");
  document.querySelector("body").classList.toggle("overflow_hidden")
})

// back-to-top
function scrollBtn() {
  window.scrollTo(0, 0);
}
window.addEventListener("scroll", function () {
  let topbtn = document.getElementById("topbtn");
  if (window.scrollY > 300) {
      topbtn.style.display = 'block';
  }
  else{
      topbtn.style.display = 'none';
  }
})
// preloder
setTimeout(() => {
  document.getElementById("preloder").classList.add("d-none");
  document.body.classList.remove("overflow-hidden");
}, 2000);