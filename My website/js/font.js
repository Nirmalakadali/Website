const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');
const f = document.getElementById('demo');
f1.addEventListener('click', function onClick(event) {
    f.style.fontSize = '5px';

});


f2.addEventListener('click', function onClick(event) {
    f.style.fontSize = '25px';

});


f3.addEventListener('click', function onClick(event) {
    f.style.fontSize = '40px';
});