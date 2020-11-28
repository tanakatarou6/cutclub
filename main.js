$(function () {
  //---------------------------------
  //----スムーススクロール--------------
  //---------------------------------
  $("header a,footer a").click(function () {
    // 移動先の位置調整。設定したpxだけ下にずれる。
    let adjust = 0;
    // スクロール速度(ミリ秒)
    let speed = 500;
    // アンカーの取得。リンク先(href)を取得して変数に代入
    let href = $(this).attr("href");
    // 移動先を取得。上で取得したidと同じ要素を探して、targetに代入(なければ「html」を代入)
    let target = $(href == "#" || href == "" ? "html" : href);
    // 移動先の調整。idの要素の位置をoffsetメソッドで取得して、positionに代入
    let position = target.offset().top + adjust;
    // スムーススクロール
    $("body,html").animate({ scrollTop: position }, speed);
    return false;
  });

  //---------------------------------
  //----「TOPに戻る」ボタン-------------
  //---------------------------------
  // ボタンのDOMを取得
  let $pageTop = $("#page_top");
  $(window).scroll(function () {
    // ボタンを表示するまでのスクロール量
    let length = 500;
    // 現在のスクロール位置を取得
    let position = $(window).scrollTop();
    // 現在位置が表示する位置に達しているかどうかで、表示or非表示
    if (position >= length) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });

  $pageTop.click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
    return false;
  });

  //---------------------------------
  //----ヘッダーナビスライド------------
  //---------------------------------
  // 直前の縦方向スクロール値
  let startPos = 0;
  // 現在の縦方向スクロール値
  let nowScrollPos = 0;
  // ヘッダーが隠されるまでの最上部からのスクロール値
  let hidePos = 200;
  $(window).on("scroll", function () {
    nowScrollPos = $(this).scrollTop();
    // スクロールされる度、上下のどちらにスクロールしたか判断
    if (nowScrollPos >= startPos) {
      if (startPos >= hidePos) {
        $(".site_header").addClass("hide");
      }
    } else {
      $(".site_header").removeClass("hide");
    }
    startPos = nowScrollPos;
  });

  //---------------------------------
  //----ハンバーガーメニューチェック外し--
  //---------------------------------
  $("header a").click(function () {
    $('input[type="checkbox"]').prop("checked", false);
  });
});
