
  var button = $('#button-up');	
  $(window).scroll (function () {
    if ($(this).scrollTop () > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
});	 

var upbtn = $('.arrow-up__img');
if ($(this).scrollTop () > 300) {
    button.fadeIn();
  } else {
    button.fadeOut();
  }
upbtn.click(function(){
    $(window).scrollTop();
})

$('.footer__up-button').click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 500);
  // return false;
});
$('.header-content__decor').click(function () {
  $('body,html').animate({
      scrollTop: 9999
  }, 500);
  // return false;
});

// $('.menu__list-item').hover(function(){
//   $('.menu__list-item').css('border-bottom','orange');
// })

$('.slider__arrow-left').click(function(){
  var leftar = $('.slider-content__wrapper').css('left');
  var chisloleft = parseInt(leftar)
    leftar = chisloleft + 1500;
     slideleft = leftar + "px";
    $('.slider-content__wrapper').css('left', slideleft);
    if(leftar > 430){
      $('.slider-content__wrapper').css('left','-2579px');
    }
  
})
$('.slider__arrow-right').click(function(){
  var rightar = $('.slider-content__wrapper').css('left');
  var chisloright = parseInt(rightar)
     rightar = chisloright - 1500;
     slideright = rightar + "px";
    $('.slider-content__wrapper').css('left', slideright);
    if(rightar < -2690){
      $('.slider-content__wrapper').css('left','421px');
    }
  
})
$('#n2').click(function(){
  $('body,html').animate({scrollTop: 928}, 500);
})
$('#n3').click(function(){
  $('body,html').animate({scrollTop: 3100}, 500);
})
$('#n4').click(function(){
  $('body,html').animate({scrollTop: 6450}, 500);
})
$('#n5').click(function(){
  $('body,html').animate({scrollTop: 7450}, 500);
})
$('#n6').click(function(){
  $('body,html').animate({scrollTop: 9000}, 500);
})