$(function () {
  //창의 크기가 변경하면 수행하는 resize 이벤트
  $(window).resize(function(){
    var win_width=$(this).width();
    //console.log('win_width');
    if(win_width <= 1024) { //태블릿이거나 모바일화면
      $('nav').prependTo('.h-top');
      $('.jordan-logo').find('img').attr('src','../images/AIR-JORDAN-LOGO-b.svg');
    } else { //데스크탑화면
      $('.main-menu').on({
        mouseenter:function() {
          $('.sub-menu, .sub-bg').stop().show();
        },
        mouseleave:function() {
          $('.sub-menu, .sub-bg').stop().hide();
        }
      });
      $('nav').appendTo('header');
      $('.jordan-logo').find('img').attr('src','../images/AIR-JORDAN-LOGO.svg');
    }
  });
  
  $(window).trigger('resize');
});
