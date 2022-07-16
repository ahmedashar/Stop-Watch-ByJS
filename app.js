var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var millisec = document.getElementById("msec");
var min = 0;
var sec = 0;
var msec = 0;
var interval;

function timer(){
    msec++;

    // 01 , 02 , 03 .... 09
    if(msec<10){
        msec = 0+""+msec;
    }else{msec;}

    millisec.innerHTML = msec;
    if (msec>=99){
        sec++;

        if(sec<10){
            sec = 0+""+sec;
        }else{msec;}

        seconds.innerHTML = sec;
        msec = 0;
    }
    if (sec>=60){
        min++

        if(min<10){
            min = 0+""+min;
        }else{min;}

        minutes.innerHTML = min;
        sec=0;
    }

}

var start = document.getElementById("btn1");
var pause = document.getElementById("btn2");
function On(){
    interval = setInterval(timer,10);
    start.disabled = true;
    pause.disabled = false;
}
function stop(){
    clearInterval(interval);
    start.disabled = false;
    pause.disabled =true;
}
function reset(){
    min = 0+""+0
    sec = 0+""+0
    msec = 0+""+0
    minutes.innerText = min
    seconds.innerText = sec
    millisec.innerText = msec
    
}