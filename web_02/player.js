let audio = document.querySelector('.player_audio');
let startBtn = document.querySelector('.music_start');
let pauseBtn = document.querySelector('.music_pause');
let leftTime = document.querySelector('.left_time');
let rightTime = document.querySelector('.right_time');
let progressBar = document.querySelector('.progress_bar');

audio.addEventListener('canplaythrough', () => {
    let left=parseInt(audio.duration/60);
    let right=parseInt(audio.duration%60);

    leftTime.innerHTML = "00:00";
    if(parseInt(audio.duration/60)<10){
        left = `0${parseInt(audio.duration/60)}`
    }
    if(parseInt(audio.duration%60) < 10){
        right = `0${parseInt(audio.duration%60)}`
    }
    rightTime.innerHTML = `${left}:${right}`;
}, false)

startBtn.addEventListener('click', () => {
    startBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
    audio.play();
});

pauseBtn.addEventListener('click', () => {
    startBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
    audio.pause();
})