let hrs=document.getElementById("hrs");
let mins=document.getElementById("mins");
let sec=document.getElementById("secs");
let date=document.getElementById("date");
let mon=document.getElementById("month");
let year=document.getElementById("year");
//time
setInterval(()=>{
    let time=new Date();
hrs.innerHTML=(time.getHours()<10?"0":"")+time.getHours();
mins.innerHTML=(time.getMinutes()<10?"0":"")+time.getMinutes();
sec.innerHTML=(time.getSeconds()<10?"0":"")+time.getSeconds();
},1000);
//DATE
setInterval(()=>{
    let time=new Date();
let monthnames=["January","February","March","April","May","June","July","August","September","October","November"
    ,"December"
];
date.innerHTML=time.getDate();
mon.innerHTML=monthnames[time.getMonth()];
year.innerHTML=time.getFullYear();
},1000);