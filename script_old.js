const $startBtn = document.querySelector('.start');
const $pauseBtn = document.querySelector('.pasue');
const $stopBtn = document.querySelector('.stop');
const $resetBtn = document.querySelector('.reset');
const $historyBtn = document.querySelector('.history');
const $infoBtn = document.querySelector('.info');
const $stopWatch = document.querySelector('.stopwatch');
const $time = document.querySelector('.time');
const $timeList = document.querySelector('.time-list');

$stopWatch.innerHTML = '00 : 00'
let $count = 00;
let $second = 00;
let $minute = 00;

function watch(){
    if(timer){
        $count++;
        if($count == 100){
            $second++;
            $count = 0;
        }if($second == 60) {
            $minute++;
            $second = 0;
        }
        let minuteString = $minute;
        let secondString = $second;
        let countString = $count;
        if($minute < 10){
            minuteString = '0' + minuteString;
        } if($second < 10){
            secondString = '0' + secondString;
        } if($count < 10){
            countString = '0' + countString;
        }
        $stopWatch.innerHTML = `${minuteString} : ${secondString}`;
        setTimeout(watch, 10);
        let dataWatch = $stopWatch.textContent;
        $pauseBtn.addEventListener('click', function(){
            timer = false;
        });
        $stopBtn.addEventListener('click',function(){
            timer = false;
            $count = 00;
            $second = 00;
            $minute = 00;
            $time.innerHTML = `Ostatni pomiar: ${dataWatch}`
            $stopWatch.innerHTML = '00 : 00';
            console.log();
            
        });
        $historyBtn.addEventListener('click',function(){
            console.log(`${dataWatch}`);
            $timeList.innerHTML = `<li>Pomiar nr : ${dataWatch}</li>`;
        });
    }
};

$startBtn.addEventListener('click', function(){
    timer = true;
    watch();
});
// $resetBtn.addEventListener('click',);