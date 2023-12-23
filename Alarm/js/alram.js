let clock = document.querySelector('.clock');
let hoursEle = document.getElementById('hours');
let minsEle = document.getElementById('mins');
let secsEle = document.getElementById('secs');
let btn = document.querySelector(".btn");
let audio = document.getElementById('aud');
let timeFound;

function time() {
    let time = new Date();
    let hours = time.getHours();
    let mins = time.getMinutes()
    let sec = time.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    mins = mins < 10 ? '0' + mins : mins;
    sec = sec < 10 ? '0' + sec : sec;

    clock.innerHTML = `${hours}:${mins}:${sec}`;

    if (timeFound === `${hours}:${mins}:${sec}`) {
        audio.play()
    }
}
setInterval(time, 1000);

function addHours() {
    for (let i = 0; i <= 23; i++) {
        let hours = i < 10 ? "0" + i : i;
        let option = document.createElement("option");
        let textHours = document.createTextNode(hours);
        option.append(textHours);
        hoursEle.append(option);
    };
};
addHours();

function addMins() {
    for (let i = 1; i <= 60; i++) {
        let mins = i < 10 ? "0" + i : i;
        let option = document.createElement("option");
        let texMinute = document.createTextNode(mins);
        option.append(texMinute);
        minsEle.append(option);
    };
};
addMins();

function addSecs() {
    for (let i = 0; i <= 60; i++) {
        let sec = i < 10 ? "0" + i : i;
        let option = document.createElement("option");
        let texMinute = document.createTextNode(sec);
        option.append(texMinute);
        secsEle.append(option);
    };
};
addSecs();

function setAlarm() {
    let time = `${hoursEle.value}:${minsEle.value}:${secsEle.value}`;
    if (hoursEle.value == "Hour" || minsEle.value == "Minute" || secsEle.value == "AM / PM") {
        alert("Enter the date Correct")
    }
    else {
        timeFound = time;
    }
}
btn.addEventListener("click", setAlarm);