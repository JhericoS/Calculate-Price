// Constants

const buttonAdd = document.getElementsByName('data-add')[0];
const buttonSub = document.getElementsByName('data-sub')[0];

// Initial variables

var count = document.getElementById('count');
var result = document.getElementById('result');
count.value = 1;
result.value = 230*count.value;

// Buttons functions

buttonAdd.addEventListener('click', function(){
    calculateAdd();
    refreshPrice();
});

function calculateAdd(){
    if (count.value < 10) {
        const previous = parseFloat(count.value);
        count.value = previous + 1;
    }
}

buttonSub.addEventListener('click', function(){
    calculateSub();
    refreshPrice();
});

function calculateSub(){
    if (count.value > 1) {
        const previous = parseFloat(count.value);
        count.value = previous - 1;
    }
}

function refreshPrice(){
    const previous = parseFloat(count.value);
    result.value = previous * 230;
}