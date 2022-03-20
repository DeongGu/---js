const timeTable = document.querySelector('#timeTable');
const dayTable = document.querySelector('#dayTable');
function time() {
    const date = new Date();
    let hours = String(date.getHours()).padStart(2,'0');
    let minutes = String(date.getMinutes()).padStart(2,'0');
    let seconds = String(date.getSeconds()).padStart(2,'0');
    timeTable.innerText = `${hours} : ${minutes} : ${seconds}`;

    const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let years = date.getFullYear();
    let month = date.getMonth()+1;
    let dday = date.getDate();
    let dayOfWeek = WEEKDAY[date.getDay()];
    dayTable.innerText = `${years}.${month}.${dday}. ${dayOfWeek}`;
}

time();
setInterval(time, 1000);