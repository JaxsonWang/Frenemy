'use strict';
(function ($, pivot) {
  $(function () {
    //初始化顶栏透明
    isScrollTop() ? addTopNav() : removeTopNav();
    //滚动顶栏透明
    $(window).scroll(function () {
      isScrollTop() ? addTopNav() : removeTopNav();
    });
    // 移动端点击菜单按钮添加样式
    $('.navbar-toggler').click(function (event) {
      if ($(this).attr('aria-expanded') === 'false') {
        if (isScrollTop()) {
          $('nav.navbar').removeClass(['navbar-dark', 'top-nav']).addClass('navbar-light');
        }
        $('html').addClass('overflow-hidden');
      } else {
        if (isScrollTop()) {
          $('nav.navbar').addClass(['navbar-dark', 'top-nav']).removeClass('navbar-light');
        }
        $('html').removeClass('overflow-hidden');
      }
    });
    // 回到顶部
    var returnTop = $('#return-to-top');
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 50) {
        returnTop.addClass('bounceInRight').removeClass('bounceOutDown')
      } else {
        returnTop.removeClass('bounceInRight').addClass('bounceOutDown');
      }
    });
    returnTop.click(function () {
      $('body,html').animate(
        {
          scrollTop: 0
        },
        500
      );
    });

  });

  // 文章列表动效
  pivot.init({
    selector: '.post-card-image-link',
    sensitivity: 80,
    touch: false
  });

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

  /**
   * 是否在页面最顶部
   * @returns {boolean} true = 是在页面顶部
   */
  function isScrollTop() {
    return $(document).scrollTop() <= 0
  }
})(window.jQuery, window.pivot);
