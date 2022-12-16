window.addEventListener('load',curTime);
function curTime(){
    let curDate = new Date();
    let numDay = curDate.getDay()
    let monthDay = curDate.getDate()
    let nameDay = ["SUNDAY","MONDAY", "TUESDAY", "WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
    let numMonth = curDate.getMonth();
    let nameMonth = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
    let year = curDate.getFullYear();
    let hours = curDate.getHours();
    let minutes = curDate.getMinutes();
    let seconds = curDate.getSeconds();
    let day = nameDay[numDay];
    let month = nameMonth[numMonth];
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours === 24 || hours === 0 ? 12:hours;
    hours = 10 > hours ? '0' + hours: hours;
    minutes = 10 > minutes ? '0' + minutes: minutes;
    seconds = 10 > seconds ? '0' + seconds: seconds;
    document.getElementById("hours").innerText = hours +":";
    document.getElementById("minutes").innerText = minutes +":";
    document.getElementById("seconds").innerText = seconds;
    document.getElementById("pm_am").innerText = ampm;
    document.getElementById("day").innerText = day;
    document.getElementById("month").innerText =  month +" "+ monthDay;
    document.getElementById("year").innerText = year;
    setTimeout(curTime, 200);
}