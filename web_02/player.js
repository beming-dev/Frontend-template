let audio = document.querySelector('.player_audio');
let leftTime = document.querySelector('.left_time');
let rightTime = document.querySelector('.right_time');
let progress = document.querySelector('.my_progress_touch');
let bar = document.querySelector('.my_bar');
let startBtn = document.querySelector('.music_start');
let pauseBtn = document.querySelector('.music_pause');
let prevBtn = document.querySelector('.icon_prev');
let nextBtn = document.querySelector('.icon_next');
let heartBtn = document.querySelector('.icon_heart');

let dragPause = false; //check whether current pause is by drag

let isPlaying = false;
let isShuffle = false;
let isLoop = false;
let isheart = false;
let shuffleBtn = document.querySelector('.icon_shuffle');
let loopBtn = document.querySelector('.icon_loop');

let musics;
let currentMusicIdx=0;

loadJSON((json)=>{
    musics = json.musics;
    console.log(musics);
    setMusic();
});

heartBtn.addEventListener('click', () => {
    isheart = !isheart;
    heartBtn.src = 'images/player/heart.svg'
    if(isheart){
        heartBtn.src = 'images/player/heart_pink.svg'
    }
})

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

nextBtn.addEventListener('click', () => {
    setIndex('next');
    setMusic();
})

prevBtn.addEventListener('click', () => {
    setIndex('prev');
    setMusic();
});

startBtn.addEventListener('click', () => {
    isPlaying=true;
    startBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
    audio.play();
});

pauseBtn.addEventListener('click', () => {
    isPlaying = false;
    startBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
    audio.pause();
});

audio.addEventListener('canplaythrough', () => {
    rightTime.innerHTML = makeAudioTimeText(audio.duration);
}, false);

audio.addEventListener('timeupdate', () => {
    let maxWidth = progress.clientWidth;
    bar.style.width = `${maxWidth * audio.currentTime/audio.duration}px`;

    leftTime.innerHTML = makeAudioTimeText(audio.currentTime);
});

audio.addEventListener('ended', () => {
    if(!isLoop){
        setIndex('next');
    }
    setMusic();
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

function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './musicInfo.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(JSON.parse(xobj.responseText));
      }
    };
    xobj.send(null);  
}

function setIndex(dir){
    if(isShuffle){
        let newIdx = Math.floor(Math.random()*3);
        while(newIdx == currentMusicIdx){
            newIdx = Math.floor(Math.random()*3);
        }
        currentMusicIdx = newIdx;
    }else{
        switch(dir){
            case 'next':
                currentMusicIdx++;
                if(currentMusicIdx > musics.length-1){
                    currentMusicIdx = 0;
                }
                break;
            case 'prev':
                currentMusicIdx--;
                if(currentMusicIdx < 0){
                    currentMusicIdx = musics.length;
                }
                break;
        }
    }
}

function setMusic(){
    let currentMusic = musics[currentMusicIdx];
    let musicAlbum = document.querySelector('.music_album');
    let musicTitle = document.querySelector('.music_title');
    let musicSinger = document.querySelector('.music_singer');

    musicAlbum.src = `images/albums/${currentMusic.album}`;
    musicTitle.innerHTML = currentMusic.title;
    musicSinger.innerHTML = currentMusic.singer;
    audio.src = `musics/${currentMusic.audio}`

    bar.style.width = 0;
    if(isPlaying) audio.play();
}

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