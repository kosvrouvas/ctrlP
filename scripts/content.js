var cssPagedMedia = (function () {
  var style = document.createElement('style');
  document.head.appendChild(style);
  return function (rule) {
      style.innerHTML = rule;
  };
}());
cssPagedMedia.size = function (size) {
  cssPagedMedia('@page {size: ' + size + '}');
};
cssPagedMedia.size('auto');

console.log("ctrlP should work.")