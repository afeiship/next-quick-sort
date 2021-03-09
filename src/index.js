(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.quickSort = function (inArray) {
    var length = inArray.length;
    if (length <= 1) return inArray;

    var pivotIdx = Math.floor(length / 2);
    var pivot = inArray[pivotIdx];
    var left = [];
    var right = [];

    for (var i = 0; i < length; i++) {
      var value = inArray[i];
      if (value < pivot) {
        left.push(value);
      }

      if (value > pivot) {
        right.push(value);
      }
    }
    var start = nx.quickSort(left);
    var middle = [pivot];
    var end = nx.quickSort(right);

    return [].concat(start, middle, end);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.quickSort;
  }
})();
