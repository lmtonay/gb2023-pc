const container = document.getElementById('certificates');
const input = document.getElementById('search');

function pushIntoDOM (array) {
  container.innerHTML = '';
  array.forEach((item) => {
    const div = document.createElement('div');
    const a = document.createElement('a');
    div.className = 'certificate';
    a.className = 'certificate_title';
    a.href = './assets/' + item + '.pdf';
    a.target = '_blank';
    a.innerHTML = item;
    a.download = true
    div.appendChild(a);
    container.appendChild(div);
  });
}

input.addEventListener('keyup', (e) => {
  const value = e.target.value;
  const filtered = names.filter((item) => {
    return item.toLowerCase().includes(value.toLowerCase());
  });
  pushIntoDOM(filtered);
});

document.addEventListener('DOMContentLoaded', () => {
  pushIntoDOM(names);
});


