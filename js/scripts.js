
    $(document).ready(function(){
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
          alert(total);

        });

          $(".start").click(function() {
          $(".html-section").slideToggle();
          $(".intro-text").fadeOut();
        });

          $("input[type='submit']").click(function(){
          $(".html-section").slideUp();
          $(".javascript-section").slideToggle();
          });

          $(".title-text").fadeIn(3000);

          $('.flexslider').flexslider({
          animation: "slide"
        });

    });
