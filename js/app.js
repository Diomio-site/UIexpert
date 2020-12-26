$(function () {

   // Lilter cat

   let filter = $("[data-filter]");

   filter.on("click", function (event) {
      event.preventDefault();


      let cat = $(this).data('filter');

      if (cat == 'all') {
         $("[data-cat").removeClass('hide');
      }
      else {



         $("[data-cat]").each(function () {

            let workCat = $(this).data('cat');
            console.log(workCat);

            if (workCat != cat) {
               $(this).addClass('hide');
            } else {
               $(this).removeClass('hide');

            }
         })
      }

   })


   // Slider Slick

   $('#workslider').slick({
      fade: true,
      autoplay: true,
   });


   // $('.partners__logo').slick({
   //    infinite: true,
   //    slidesToShow: 1,
   //    slidesToScroll: 1,
   //    autoplay: true
   // });



   // Count =============================

   var time = 2; cc = 1;
   $(window).scroll(function () {
      $('#counter').each(function () {
         var
            cPos = $(this).offset().top,
            topWindow = $(window).scrollTop();
         if (cPos < topWindow + 300) {
            if (cc < 2) {
               $('.success__count').addClass('number__show');
               $('div').each(function () {
                  var
                     i = 1,
                     num = $(this).data('num'),
                     step = 1000 * time / num,
                     that = $(this),
                     int = setInterval(function () {
                        if (i <= num) {
                           that.html(i);
                        }
                        else {
                           cc = cc + 2;
                           clearInterval(int);
                        }
                        i++;
                     }, step);
               });
            }
         }
      });
   })


   // Burger-menu =================================
   $('.header__burger').click(function (event) {
      $('.header__burger, .nav').toggleClass('active');
      $('body').toggleClass('lock');

   })

});

