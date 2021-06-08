let audio = document.querySelector('.player_audio');
let startBtn = document.querySelector('.music_start');
let pauseBtn = document.querySelector('.music_pause');
let leftTime = document.querySelector('.left_time');
let rightTime = document.querySelector('.right_time');
let progress = document.querySelector('.my_progress_touch');
let bar = document.querySelector('.my_bar');

let dragPause = false; //check whether current pause is by drag

let shuffleBtn = document.querySelector('.icon_shuffle');
let loopBtn = document.querySelector('.icon_loop');
let isShuffle = false;
let isLoop = false;

shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleBtn.src = 'images/player/shuffle.svg';
    if(isShuffle){
        shuffleBtn.src = 'images/player/shuffle-blue.svg';
    }
});

loopBtn.addEventListener('click', () => {
    isLoop = !isLoop;
    loopBtn.src = 'images/player/loop.svg';
    if(isLoop){
        loopBtn.src = 'images/player/loop-blue.svg';
    }
});

function makeAudioTimeText(time){
    let left=parseInt(time/60);
    let right=parseInt(time%60);

    if(parseInt(time/60)<10){
        left = `0${parseInt(time/60)}`
    }
    if(parseInt(time%60) < 10){
        right = `0${parseInt(time%60)}`
    }
    return `${left}:${right}`;
}

function setAudioCurrent(e){
    let bcr = progress.getBoundingClientRect();
    let time = (e.clientX - bcr.left) / bcr.width * audio.duration;
    if(time > audio.duration){
        time= audio.duration;
    }
    audio.currentTime = time;
}

audio.addEventListener('canplaythrough', () => {
    rightTime.innerHTML = makeAudioTimeText(audio.duration);
}, false);

audio.addEventListener('timeupdate', () => {
    let maxWidth = progress.clientWidth;
    bar.style.width = `${maxWidth * audio.currentTime/audio.duration}px`;

    leftTime.innerHTML = makeAudioTimeText(audio.currentTime);
});

audio.addEventListener('ended', () => {
    startBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
});

startBtn.addEventListener('click', () => {
    startBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
    audio.play();
});

pauseBtn.addEventListener('click', () => {
    startBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
    audio.pause();
});

let drag = false;
progress.addEventListener('mousedown', () => {
    drag = true;
});

progress.addEventListener('mousemove', (e) => {
    if(drag){
        if(!audio.paused){
            dragPause = true;
            audio.pause();
        }
        setAudioCurrent(e);
    }
});

progress.addEventListener('mouseup', (e) => {
    setAudioCurrent(e);
    drag = false;
    if(dragPause){
        audio.play();
        dragPause = false;
    }
});