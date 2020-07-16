const menu = document.querySelector('.hamburger'); 

menu.addEventListener('click', () => { 
  menu.classList.toggle('hamburger--active');
  $('.header__nav--menu,.header__nav > .button').toggle('slow') 
});
for (i = 0; i < document.querySelectorAll(".menu-item").length; ++i) {
  document.querySelectorAll(".menu-item")[i].addEventListener("click", ()=>{
    if(screen.width<=786){$('.header__nav--menu,.header__nav > .button').toggle('slow');
    menu.classList.toggle('hamburger--active');}
  });
}