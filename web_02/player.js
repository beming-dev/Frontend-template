let audio = document.querySelector('.player_audio');
let startBtn = document.querySelector('.music_start');
let pauseBtn = document.querySelector('.music_pause');
let leftTime = document.querySelector('.left_time');
let rightTime = document.querySelector('.right_time');
let progress = document.querySelector('.my_progress');
let bar = document.querySelector('.my_bar');

audio.addEventListener('canplaythrough', () => {
    let left=parseInt(audio.duration/60);
    let right=parseInt(audio.duration%60);

    if(parseInt(audio.duration/60)<10){
        left = `0${parseInt(audio.duration/60)}`
    }
    if(parseInt(audio.duration%60) < 10){
        right = `0${parseInt(audio.duration%60)}`
    }
    rightTime.innerHTML = `${left}:${right}`;
}, false);

audio.addEventListener('timeupdate', () => {
    let maxWidth = progress.clientWidth;
    bar.style.width = `${maxWidth * audio.currentTime/audio.duration}px`;

    let left=parseInt(audio.currentTime/60);
    let right=parseInt(audio.currentTime%60);

    if(parseInt(audio.currentTime/60)<10){
        left = `0${parseInt(audio.currentTime/60)}`
    }
    if(parseInt(audio.currentTime%60) < 10){
        right = `0${parseInt(audio.currentTime%60)}`
    }
    leftTime.innerHTML = `${left}:${right}`;
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

progress.addEventListener('click', (e) => {
    let bcr = progress.getBoundingClientRect();
    let time = (e.clientX - bcr.left) / bcr.width * audio.duration;
    audio.currentTime = time;
});

progress.addEventListener('drag', (e) => {
    audio.pause();

    let bcr = progress.getBoundingClientRect();

    let maxWidth = progress.clientWidth;
    let barWidth  = `${(e.clientX - bcr.left) / bcr.width * maxWidth}px`
    if((barWidth) >maxWidth){
        barWidth = maxWidth;
    }
    bar.style.width = maxWidth;

    let time = (e.clientX - bcr.left) / bcr.width * audio.duration;
    if(time > audio.duration){
        time= audio.duration;
    }
    audio.currentTime = time;
});

progress.addEventListener('dragend', (e) => {
    let bcr = progress.getBoundingClientRect();
    let time = (e.clientX - bcr.left) / bcr.width * audio.duration;
    audio.currentTime = time;
    audio.play();
});