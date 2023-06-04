
const s = "12:40:22AM";

// timeComponents = ["07","05","45PM"]
const timeComponents = s.split(':');
const hour = timeComponents[0];
const min = timeComponents[1];
// sec="45"
const sec = timeComponents[2].substring(0, 2);
// am_pm = "PM"
const am_pm = timeComponents[2].substring(2);

const min_sec = `:${min}:${sec}`

let newTime = "";

let newHour = "";
let tmpHour = parseInt(hour);

if (am_pm == "PM") {
    // case 1-11
    if (tmpHour < 12)
    {
        tmpHour = tmpHour + 12;
        newHour = tmpHour.toString();
    }
    // case 12, do nothing
    newHour = tmpHour;
}
else if (am_pm == "AM") {
    // case 12
    if (tmpHour == 12)
    {
        tmpHour = tmpHour - 12;
    }
    newHour = `0${tmpHour}`;
    // case 1 - 11, do nothing
}

newTime = `${newHour}${min_sec}`;
console.log(newTime);