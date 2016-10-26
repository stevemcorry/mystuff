$(document).ready(function(){
// Hides the header
  $(window).scroll(function() {
    if($(window).scrollTop() < 5){
      $('header').removeClass('smallHeader');
      $('.topTitle').css({'font-size':'36px'});
    } else {
      $('header').addClass('smallHeader');
      $('.topTitle').css({'font-size':'24px'});
    }
   });

//Widens the Left and right columns

  $('.leftBar, .rightBar').hover(function() {
    $(this).toggleClass("widen", 10000, "easeOutSine");
  });

//Module open and close
var modal = $('.aptForm');
var btn = $('.addApt');
var close = $('.close');
var submit =$('.submitApt');
//open modal
btn.on('click',function() {
  modal.css('display','block');
});
//close modal by clicking X
close.on('click',function() {
  modal.css('display','none');
});
//closes modal after submitting
submit.on('click',function() {
  modal.css('display','none');
});
//close modal by clicking anywhere else
 // $(window).on('click',function() {
 //   if(true){
 //     modal.css('display','none');
 //   }
 // });

// adds an apt box

// var boxAptCount = 0;
// $('.addApt').on('click', function() {
//     $('.meat').append("<div class='boxApt'>");
//     boxAptCount++;
//
// });

});
