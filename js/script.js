$(document).ready(function() {
  
   $('.overlay_popup').click(function() {
      $('.overlay_popup, .popup').hide();
   });

   $(".burger").on('click', function(){
      $(this).toggleClass('active');
      $('.menu').toggleClass('active');
      $('.head').toggleClass('active');
   })

   $(".menu a").on('click', function(){
      $(".burger").removeClass('active');
      $('.menu').removeClass('active');
      $('.head').removeClass('active');
   })
   

   $(".burger_r").on('click', function(){
      $(this).toggleClass('active');
      $('.menu').toggleClass('active');
      $('.head').toggleClass('active');
   })

   $(".menu a").on('click', function(){
      $(".burger").removeClass('active');
      $('.menu').removeClass('active');
      $('.head').removeClass('active');
   })
   

  $(".plus").on('click', function(){
      $(this).toggleClass("active");
      $(this).parent(".qst_i_head").siblings(".qst_i_body").toggleClass("active");
   })

   $('a[href ^= "#"]').click(function () {
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 300 );
      return false;
   });

   
   $('.pf').on("click", function(){
      $k = '.' + 'pf' +"_m";
      //console.log($k);
      $($k).addClass('active');
      $btn = $($k).children(".portfolio_modal_content").children(".close_b").children('.btn_close');
      $($btn).on('click', function(){
        $($k).removeClass('active');
      });
    });


   $(function(){
      //2. Получить элемент, к которому необходимо добавить маску
        $("#phone").mask("+7(999) 999-9999");
        $("#phone1").mask("+7(999) 999-9999");
        $("#phone2").mask("8(999) 999-9999");
        $("#phone3").mask("8(999) 999-9999");
        $("#phone4").mask("8(999) 999-9999");
        $("#phone5").mask("8(999) 999-9999");
    });

});
    /*new TypeIt("#typeit", {
      speed: 100,
      waitUntilVisible: true
    })
    .type("для поступления", {delay: 300})
    .delete(-15)
    .type("для работы", {delay: 300})
    .delete(-10)
    .type("для себя", {delay: 300})
    .go()
