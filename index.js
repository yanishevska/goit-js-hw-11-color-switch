const start = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

//===============================================================
const colors = [
'#FFFFFF',
'#2196F3',
'#4CAF50',
'#FF9800',
'#009688',
'#795548',
];

//===============================================================
start.addEventListener('click', colorChange);
stopBtn.addEventListener('click', colorRemove);

//===============================================================
let colorRandom = null;

function colorChange () {
    colorRandom = setInterval(() => {
        body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
    start.disabled = true;
    
}

const randomIntegerFromInterval = (min, max) => {
return Math.floor(Math.random() * (max - min + 1) + min);
};

//===============================================================
function colorRemove() {
    clearInterval(colorRandom);
    start.disabled = false;
}


