var remainingTime =86400;
function setTime(){
    if(remainingTime == 0)return;
    var h=Math.floor(remainingTime/3600);
    var m= Math.floor((remainingTime%3600)/60);
    var s= Math.floor(remainingTime%3600)%60;

    document.querySelector('.hours').innerHTML=h;
    document.querySelector('.minutes').innerHTML=m;
    document.querySelector('.second').innerHTML=s;
}
setInterval(()=>{
    remainingTime-=1;
    setTime();

},1000);
 