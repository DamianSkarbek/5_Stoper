const $startBtn = document.querySelector('.start');
const $pauseBtn = document.querySelector('.pasue');
const $stopBtn = document.querySelector('.stop');
const $resetBtn = document.querySelector('.reset');
const $historyBtn = document.querySelector('.history');
const $infoBtn = document.querySelector('.info');
const $stopWatch = document.querySelector('.stopwatch');
const $time = document.querySelector('.time');
const $timeList = document.querySelector('.time-list');

const $modalShadow = document.querySelector('.modal-shadow');
const $closeModalBtn = document.querySelector('.close');

const $colorBtn = document.querySelector('.fa-paintbrush');
const $colorPanel = document.querySelector('.colors');
const $colorOne = document.querySelector('.one');
const $colorTwo = document.querySelector('.two');
const $colorThree = document.querySelector('.three');
const $root = document.documentElement;


let $timesArr = [];

let $counttime;
let $min = 0;
let $sec = 0;

const handleStart = () => {
    clearInterval($counttime);
    $counttime = setInterval(() => {
        if ($sec < 9) {
            $sec++
            $stopWatch.textContent = `${$min} : 0${$sec}`;
        } else if ($sec >= 9 && $sec < 59) {
            $sec++;
            $stopWatch.textContent = `${$min} : ${$sec}`
        } else {
            $min++;
            $sec = 0;
            $stopWatch.textContent = `${$min} : 00`
        }
    }, 1000);
};

const handleStop = () => {
    $time.innerHTML = `Ostatni czas: ${$stopWatch.textContent}`;
    if ($stopWatch.textContent !== '0 : 00') {
        $time.style.visibility = 'visible';
        $timesArr.push($stopWatch.textContent);
    }
    clearStuff();
}

const handlePause = () => {
    clearInterval($counttime);
}

const handleReset = () => {
    $time.style.visibility = 'hidden';
    $timesArr = [];
    clearStuff()
}

const clearStuff = () => {
    clearInterval($counttime);
    $stopWatch.textContent = '0 : 00';
    $timeList.textContent = '';
    $min = 0;
    $sec = 0;
}

const showHistory = () => {
    $timeList.textContent = '';
    let num = 1;
    $timesArr.forEach(time => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`;
        $timeList.appendChild(newTime);
        num++;
    })
}

const showModal = () => {
    if (!($modalShadow.style.display === 'block')) {
        $modalShadow.style.display = 'block';
    } else {
        $modalShadow.style.display = 'none';
    }
    $modalShadow.classList.toggle('modal-animation');
}

$startBtn.addEventListener('click', handleStart);
$stopBtn.addEventListener('click', handleStop);
$pauseBtn.addEventListener('click', handlePause);
$resetBtn.addEventListener('click', handleReset);
$historyBtn.addEventListener('click', showHistory);

$infoBtn.addEventListener('click', showModal);
$closeModalBtn.addEventListener('click', showModal);
window.addEventListener('click', e => e.target === $modalShadow ? showModal() : false);

$colorBtn.addEventListener('click', () => {
    $colorPanel.classList.toggle('show-colors')
});
$colorOne.addEventListener('click', () => {
    $root.style.setProperty('--first-color', 'rgb(250, 20, 6)');
    $root.style.setProperty('--hover-color', 'rgb(209, 33, 24)');
});

$colorTwo.addEventListener('click', () => {
    $root.style.setProperty('--first-color', 'rgb(6, 173, 250)');
    $root.style.setProperty('--hover-color', 'rgb(28, 145, 199)');
});

$colorThree.addEventListener('click', () => {
    $root.style.setProperty('--first-color', 'rgb(0, 255, 42)');
    $root.style.setProperty('--hover-color', 'rgb(28, 209, 58)');
});