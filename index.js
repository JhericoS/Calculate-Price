// Constants

const buttonAdd = document.getElementsByName('data-add')[0];
const buttonSub = document.getElementsByName('data-sub')[0];
const buttonAddY = document.getElementsByName('data-add-y')[0];
const buttonSubY = document.getElementsByName('data-sub-y')[0];

// Initial variables

var count = document.getElementById('count');
var years = document.getElementById('years');
var result = document.getElementById('result');
count.value = 5;
years.value = 1;
result.value = 18.5*count.value*years.value;

// Buttons functions

// Add pc's

buttonAdd.addEventListener('click', function(){
    calculateAdd();
    refreshPrice();
});

function calculateAdd(){
    if (count.value < 100) {
        const previous = parseFloat(count.value);
        count.value = previous + 1;
    }
}

// Sub pc's

buttonSub.addEventListener('click', function(){
    calculateSub();
    refreshPrice();
});

function calculateSub(){
    if (count.value > 5) {
        const previous = parseFloat(count.value);
        count.value = previous - 1;
    }
}

// Add Years

buttonAddY.addEventListener('click', function(){
    calculateAddY();
    refreshPrice();
});

function calculateAddY(){
    if (years.value < 3) {
        const previous = parseFloat(years.value);
        years.value = previous + 1;
    }
}

// Sub Years

buttonSubY.addEventListener('click', function(){
    calculateSubY();
    refreshPrice();
});

function calculateSubY(){
    if (years.value > 1) {
        const previous = parseFloat(years.value);
        years.value = previous - 1;
    }
}

function refreshPrice(){
    const previous = parseFloat(count.value);
    const timey = parseFloat(years.value);
    if (previous <= 10){
    result.value = previous * 18.5 * timey;
    }
    else if (previous >= 11 && previous<=25){
        result.value = previous * 15.5 * timey;
    }
    else if (previous >= 26 && previous<=49){
        result.value = previous * 13.5 * timey;
    }
}