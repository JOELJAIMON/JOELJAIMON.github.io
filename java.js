const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const link = document.querySelectorAll(".nav-links li");
console.log(screen.width);


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
 
  links.forEach(link => {
    link.classList.add("fade");
  });

});




link.forEach(function(i){
  i.addEventListener('click',function(){
    navLinks.classList.remove('open');
    
  })
})

