window.onload = function(){


// 내가 태어난 날(년, 월, 일)
let myBth = new Date(1993, 0, 6);
// 나의 죽는 날(년, 월, 일)
let endDay = new Date(2073, 0, 6);
//현재 시간()
let now = new Date()

//나의 나이(현재 년도 - 내가 태어난 년도)
let myAge = now.getFullYear()-myBth.getFullYear();
//나의 나이를 개월 수로 변환
let myAge_monthly = myAge * 12 + (now.getMonth()+1);

//나의 남은 수명 = 내가 죽는 년도 - 현재 년도
let myRemainLife = endDay.getFullYear()-now.getFullYear();
//나의 남은 수명을 개월 수로 변환 = 나의 남은 수명 * 12 - 현재 월
let myRemainLife_monthly = myRemainLife * 12 - (now.getMonth()+1);
// 나의 수명 = 죽는 년도 - 태어난 년도
let endYear = endDay.getFullYear() - myBth.getFullYear();
let endMonthly = endYear * 12;


// 나의 현재 나이를 24시간으로 표현하면 어떻게 해야 할까??
//24시를 가르키는 시간은 나의 나이가 100살이 되는 시간이다
let time_sec = ((myAge_monthly / endMonthly) * 24).toFixed(2) * 60 * 60;// 남은 시간을 24시간으로 초로 환산
//나의 남은 시간을 시 분 초로 환산. 

let oneday_sec = Math.trunc(time_sec % 60);
let oneday_minute = Math.trunc(time_sec / 60) % 60;
let oneday_hour = Math.trunc(time_sec / 60 / 60);


let hour = document.querySelector('.hour')
let min = document.querySelector('.minute')
let sec = document.querySelector('.sec')

if(oneday_hour < 10){
    oneday_hour = '0' + oneday_hour
}
if(oneday_minute < 10){
    oneday_minute = '0' + oneday_minute
}
if(oneday_sec < 10){
    oneday_sec = '0' + oneday_sec
}

hour.firstElementChild.innerHTML = oneday_hour;
min.firstElementChild.innerHTML = oneday_minute;
sec.firstElementChild.innerHTML = oneday_sec;


}