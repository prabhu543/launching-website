var day = document.querySelector('#days');
var minute = document.querySelector('#minutes');
var hour = document.querySelector('#hours');
var second = document.querySelector('#seconds');

var counter=new Date('september 20, 2024 00:00:00').getTime();

var x= setInterval(function(){
    var now =new Date().getTime();
    var distance=counter - now;

    var days = Math.floor(distance / (1000 *60 * 60 * 24));
    var hours=Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 *60 * 60 ));
    var minutes = Math.floor((distance % (1000 *60 * 60 )) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        day.innerHTML= days;
        hour.innerHTML=hours;
        minute.innerHTML=minutes;
        second.innerHTML=seconds;

},1000);