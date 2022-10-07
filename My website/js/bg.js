const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

btn.addEventListener('click', function onClick(event) {
    document.body.style.background = '#f15959';

});
btn1.addEventListener('click', function onClick(event) {
    document.body.style.background = '#5bacef';

});

btn2.addEventListener('click', function onClick(event) {
    document.body.style.background = '#4c35ce';
});

btn3.addEventListener('click', function onClick(event) {
    document.body.style.background = '#dd4edd';

});

btn4.addEventListener('click', function onClick(event) {
    document.body.style.background = '#5bef67';

});