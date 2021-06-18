let startTime;
let elapsedTime = 0;
let timerInterval;
let startOrPauseFlag = false;

export default {
    data: {
        time: '00:00:00:00',
        imgSrc: '/common/images/play-button.png',
    },
    startOrPause() {
        var that = this;
        startTime = Date.now() - elapsedTime;
        if (startOrPauseFlag == false) {
            that.imgSrc = '/common/images/pause-button.png';
            startOrPauseFlag = true;
            timerInterval = setInterval(function printTime() {
                elapsedTime = Date.now() - startTime;
                that.time = timeToString(elapsedTime);
            }, 10);
        }else{
            clearInterval(timerInterval);
            that.imgSrc = '/common/images/play-button.png';
            startOrPauseFlag = false;
        }
    },
    reset() {
        var that = this;
        clearInterval(timerInterval);
        that.time = "00:00:00:00"
        elapsedTime = 0;
        that.imgSrc = '/common/images/play-button.png';
        startOrPauseFlag = false;
    },
    touchMove(e) { // Handle the swipe event.
        if (e.direction == "right") // Swipe right to exit.
        {

        }
    },
}
function timeToString(time) {
    // milliseconds to hours
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
    // hours to minutes
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
    // minutes to seconds
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
    // seconds to milliseconds
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
    let formattedHH = padL(hh,2,0)
    let formattedMM = padL(mm,2,0)
    let formattedSS = padL(ss,2,0)
    let formattedMS = padL(ms,2,0)
    return `${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`;
}
function padL(a,b,c) { //string/number,length=2,char=0
    return (new Array(b || 2).join(c || 0) + a).slice(-b)
}