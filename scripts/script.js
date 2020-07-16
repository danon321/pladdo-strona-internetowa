
var headerHeight = $("header.header").height();
$('a[href*="#"]').bind("click", function(e) {
    e.preventDefault();
    var target = $(this).attr("href"); 
    var scrollToPosition = $(target).offset().top - headerHeight;
    if(screen.width<=786)scrollToPosition = scrollToPosition - 145;
    $('html').animate({ 'scrollTop': scrollToPosition }, 1000, function(){ 
        window.location.hash = "" + target;
        $('html').animate({ 'scrollTop': scrollToPosition }, 0);
    });
});
$(document).ready(function () {
    $('button[type=submit]').click(function(){
      email_wzor = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if(($(".s-6__form--input").val()=='')||($(".s-6__form--input").val().search(email_wzor)!=0)){
              $('.s-6__form--information').addClass("error").text("You need to type in a valid email address");
                return false;
            }
            else if($('input[type=checkbox]').prop("checked")==false){
                $('.s-6__form--information').addClass("error").text("You need to accept the terms and policy");
                  return false;
            }
            else{
              $('.s-6__form--information').removeClass("error").addClass("succes").text("Thank You! Mail sent succesfull");
              return true;
            }       
    });
  });
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