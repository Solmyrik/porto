$(document).ready(function () {

   $('.icon-menu').click(function (event) {
      $('.icon-menu,.menu__body').toggleClass('_active');
   });

   function ibg() {

      $.each($('.ibg'), function (index, val) {
         if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
         }
      });
   }

   ibg();

});