var target = document.getElementById('card');

document.getElementById('redo').addEventListener('click', function() {
  target.style.backgroundColor = 'red';
});

document.getElementById('blueo').addEventListener('click', function() {
  target.style.backgroundColor = 'blue';
});

document.getElementById('greyo').addEventListener('click', function() {
  target.style.backgroundColor = 'grey';
});
