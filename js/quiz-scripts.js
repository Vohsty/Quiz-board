$(document).ready(function(){
  var name = 0;
    $("input[type='button']").click(function(){
      event.preventDefault();
      var fav = [];
      var total= 0;
      $.each($("input[name='choice']:checked"), function(){
      fav.push($(this).val());
      });


      var result =fav.map(function (x){
      return parseInt(x,10);
      });

      result.forEach(function(x){
      total +=x;
      })
      $("#output2").text("Your score Is " +total+ "%");



    });

      $(".start").click(function() {
      $(".html-section").slideToggle();
      $(".intro-text").fadeOut();


    });

      $("#next").click(function(){
      $(".html-section").slideUp();
      $(".javascript-section").slideToggle();
      });

      $("#back").click(function(){
      $(".javascript-section").slideUp();
      $(".html-section").slideToggle();

      });

      $("#user").click(function(){
      var name = $("#add1").val();
      var email = $("#add1").val();
      $("#output").text(name);
        return false;

     });


      $(".title-text").fadeIn(3000);

      $('.fullBackground').fullClip({
        images: ['images/js.jpg', 'images/CEH.jpg', 'images/stu.jpg']
      });

      $('.fullBackground').fullClip({
        transitionTime: 1000,
        wait: 3000
      });


});
