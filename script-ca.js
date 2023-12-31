"use strict";

var container = document.getElementById('certificates');
var allNames = names;
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
    a.href = './ca/' + item + '.pdf';
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