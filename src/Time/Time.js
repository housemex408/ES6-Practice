
const s = "12:00:00AM";

// // timeComponents = ["07","05","45PM"]
// const timeComponents = s.split(':');
// const hour = timeComponents[0];
// const min = timeComponents[1];
// // sec="45"
// const sec = timeComponents[2].substring(0, 2);
// // am_pm = "PM"
// const am_pm = timeComponents[2].substring(2);

// const min_sec = `:${min}:${sec}`

// let newTime = "";

// let newHour = "";
// let tmpHour = parseInt(hour);

// if (am_pm == "PM") {
//     // case 1-11
//     if (tmpHour < 12)
//     {
//         tmpHour = tmpHour + 12;
//         newHour = tmpHour.toString();
//     }
//     // case 12, do nothing
//     newHour = tmpHour;
// }
// else if (am_pm == "AM") {
//     // case 12
//     if (tmpHour == 12)
//     {
//         tmpHour = tmpHour - 12;
//     }
//     newHour = `0${tmpHour}`;
//     // case 1 - 11, do nothing
// }

// newTime = `${newHour}${min_sec}`;

const timeMap = new Map ();
timeMap.set("12AM", "00");
timeMap.set("01AM", "01");
timeMap.set("02AM", "02");
timeMap.set("03AM", "03");
timeMap.set("04AM", "04");
timeMap.set("05AM", "05");
timeMap.set("06AM", "06");
timeMap.set("07AM", "07");
timeMap.set("08AM", "08");
timeMap.set("09AM", "09");
timeMap.set("10AM", "10");
timeMap.set("11AM", "11");
timeMap.set("12PM", "12");
timeMap.set("01PM", "13");
timeMap.set("02PM", "14");
timeMap.set("03PM", "15");
timeMap.set("04PM", "16");
timeMap.set("05PM", "17");
timeMap.set("06PM", "18");
timeMap.set("07PM", "19");
timeMap.set("08PM", "20");
timeMap.set("09PM", "21");
timeMap.set("10PM", "22");
timeMap.set("11PM", "23");

const timeComponents = s.split(':');
const hour = timeComponents[0];
const min = timeComponents[1];
// sec="45"
const sec = timeComponents[2].substring(0, 2);
// am_pm = "PM"
const am_pm = timeComponents[2].substring(2);

const min_sec = `:${min}:${sec}`

const hour_am_pm = `${hour}${am_pm}`;

const new_hour = timeMap.get(hour_am_pm);

console.log(new_hour + min_sec);