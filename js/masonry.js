window.onload = function () {
  new Masonry(".sab", {
    itemSelector: ".item",
    columnWidth: 330,
    gutter: 4,
    fitWidth: true,
  });
};
