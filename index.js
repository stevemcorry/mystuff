$(document).ready(function(){
// Hides the header
  $(document).scroll(function() {
    if($(document).scrollTop() < 3){
      $('header').css('display','flex');
    } else {
      $('header').css('display','none');}
   });

//Widens the Left and right columns

  $('.leftBar, .rightBar').hover(function() {
    $(this).toggleClass("widen", 10000, "easeOutSine");
  });

// adds an apt box

// var boxAptCount = 0;
// $('.addApt').on('click', function() {
//     $('.meat').append("<div class='boxApt'>");
//     boxAptCount++;
// 
// });

});
