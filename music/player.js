let player = document.querySelector('.player');
let btnPrev = document.querySelector('.fa-chevron-left');
let btnNext = document.querySelector('.fa-chevron-right');

let profile = document.querySelector('.profile');
let singerIntro = document.querySelector('.singer-intro');
let playerBackground = document.querySelector('.player-background');

let musicInfo = null;
let currentMusic = 0;

loadJSON((json) => {
    musicInfo = json;
})

function setMusic(){
    if(musicInfo){
        console.log(currentMusic);
        let music = musicInfo.musicInfo[currentMusic];
        playerBackground.style = `background-image: url(./src/images/${music.albumImg})`;
        profile.src = `./src/images/${music.singerName}.jpg`
        singerIntro.innerHTML = music.intro;
    }
}

function onPrevClick(){
    if(musicInfo){
        if(currentMusic > 0) currentMusic--;
        setMusic();
    }
}

function onNextClick(){
    if(musicInfo){
        if(currentMusic < musicInfo.musicInfo.length-1) currentMusic++;
        setMusic();
    }
}

btnPrev.addEventListener('click', onPrevClick);
btnNext.addEventListener('click', onNextClick);


function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './music.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(JSON.parse(xobj.responseText));
      }
    };
    xobj.send(null);  
}