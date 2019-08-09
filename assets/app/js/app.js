'use strict';
(function ($, pivot) {
  $(function () {
    //初始化顶栏透明
    $(document).scrollTop() <= 0 ?  addTopNav() : removeTopNav();
    //滚动顶栏透明
    $(window).scroll(function () {
      $(document).scrollTop() <= 0 ?  addTopNav() : removeTopNav();
    });
  });

  // 文章列表动效
  pivot.init({
    selector: '.post-card-image-link',
    sensitivity: 80,
    touch: false
  });
})(window.jQuery, window.pivot);

/**
 * 添加导航样式
 */
function addTopNav() {
  $('nav.navbar').addClass('top-nav').addClass('navbar-dark').removeClass('navbar-light');
}

/**
 * 移除导航样式
 */
function removeTopNav() {
  $('nav.navbar').removeClass('top-nav').removeClass('navbar-dark').addClass('navbar-light');
}
