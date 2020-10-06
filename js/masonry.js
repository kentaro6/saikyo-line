document.addEventListener("DOMContentLoaded", function () {
  /* ビューポートの幅が 650 ピクセル以上の場合 */
  const mql = window.matchMedia("screen and (min-width: 650px)");

  function checkBreakPoint(mql) {
    if (mql.matches) {
      // PC向け
      new Masonry(".sab", {
        itemSelector: ".item",
        columnMaxWidth: 310,
        gutter: 10,
        fitWidth: true,
      });
    } else {
      // スマホ向け
      new Masonry(".sab", {
        itemSelector: ".item",
        columnMaxWidth: 150,
        gutter: 4,
        fitWidth: false,
      });
    }
  }

  // ブレイクポイントの瞬間に発火
  mql.addListener(checkBreakPoint);

  // 初回チェック
  checkBreakPoint(mql);
});
