// See a live countdown timer that ticks down every second (start the count at 14 days)

// select all elements needed
const daysElement = document.querySelector('.days .number');
const hoursElement = document.querySelector('.hours .number');
const minutesElement = document.querySelector('.minutes .number');
const secondsElement = document.querySelector('.seconds .number');
// set variables for days, hours, minutes, seconds
let days = 11;
let hours = Number('0' + 0);
let minutes = Number('0' + 0);
let seconds = Number('0' + 0);
// timer counter
setInterval(function(){
    // insert markup into squares
    secondsElement.innerHTML = seconds;
    minutesElement.innerHTML = minutes;
    hoursElement.innerHTML = hours;
    daysElement.innerHTML = days;
    // initial state
    if((hours - '0') === 0 && (minutes - '0') === 0 && (seconds - '0') === 0){
        days--;
        hours = 23;
        minutes = 59;
        seconds = 59;
    }

    seconds--

    if(seconds < 10){
        seconds = '0' + seconds;
    }

    if(seconds == 0){        
        seconds = 59; 
        minutes-- 
        if(minutes < 10){
            minutes = '0' + minutes;
        }
        if(minutes == 0){
            minutes = 59;
            hours--;
            if(hours < 10){
                hours = '0' + hours;
            }
            if(hours == 0){
                hours = 24;
                days--;
                if(days < 10){
                    days = '0' + days;
                }
            }
        }   
    }
}, 0.001)
