let mobile = document.querySelector(".mobile")
let menu = document.querySelector(".menu")

menu.addEventListener("click",function(){
  mobile.classList.toggle("view");
  document.querySelector("body").classList.toggle("overflow_hidden")
})
