window.onload = function () {
  new Masonry(".sab", {
    itemSelector: ".item",
    columnWidth: 350,
    gutter: 15,
    fitWidth: true,
  });
};
