const greets = document.querySelector('.greets');
const date = document.querySelector('.date');
const btn = document.querySelector('.btn');
const overLayer = document.querySelector('.overlayer');
const remove = document.querySelector('.fa-times');

btn.addEventListener('click', () => {
    overLayer.classList.add('show');
});

remove.addEventListener('click', () => {
    overLayer.classList.remove('show');
});

let x = new Date().getHours();
if (x < 12) {
    greets.innerHTML = "Good morning Guest";
}else if (x < 16) {
    greets.innerHTML = "Good afternoon Guest";
}else if (x < 18) {
    greets.innerHTML = "Good evening Guest";
}else{
    greets.innerHTML = "Good night Guest";
}

let day = new Date().getDay();
switch (day) {
    case 0:
        document.querySelector('.day').innerHTML = "Today is Sunday";
        break;
     case 1:
        document.querySelector('.day').innerHTML = "Today is Monday";
        break;
    case 2:
        document.querySelector('.day').innerHTML = "Today is Tuesday";
        break;
    case 3:
        document.querySelector('.day').innerHTML = "Today is Wednessday";
        break;
    case 4:
        document.querySelector('.day').innerHTML = "Today is Thursday";
        break;
    case 5:
        document.querySelector('.day').innerHTML = "Today is Friday";
        break;
    case 6:
        document.querySelector('.day').innerHTML = "Today is Saturday";
        break;
}

let y = new Date();
date.innerHTML = ` ${y.getDate()} ${y.getMonth()} ${y.getFullYear()}`;
