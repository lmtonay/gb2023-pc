"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var container = document.getElementById('certificates');
var allNames = [].concat(_toConsumableArray(names), _toConsumableArray(names2));
allNames.sort(function (a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
});
var input = document.getElementById('search');
function pushIntoDOM(array) {
  container.innerHTML = '';
  array.forEach(function (item) {
    var div = document.createElement('div');
    var a = document.createElement('a');
    div.className = 'certificate';
    a.className = 'certificate_title';
    a.href = './assets/' + item + '.pdf';
    a.target = '_blank';
    a.innerHTML = item;
    a.download = true;
    div.appendChild(a);
    container.appendChild(div);
  });
}
input.addEventListener('keyup', function (e) {
  var value = e.target.value;
  var filtered = allNames.filter(function (item) {
    return item.toLowerCase().includes(value.toLowerCase());
  });
  pushIntoDOM(filtered);
});
document.addEventListener('DOMContentLoaded', function () {
  pushIntoDOM(allNames);
});