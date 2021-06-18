let playBtn = document.getElementsByClassName("table-play-icon");
let audio = document.getElementById('audio-songs');
let playing;

function updatePlayBtn(item){
    if(item.classList.contains('clicked')){
        item.src = "assets/images/player/pause.svg"
        playMusic(item.dataset.music);
    }else{
        item.src = "assets/images/player/play.svg"
    }
}

function playMusic(musicName){
    if(musicName !== playing){audio.src = `assets/musics/${musicName}.mp3`;}
    audio.play();  
    playing = musicName;
}

[...playBtn].map((item, index)=>{
    item.addEventListener('click', ()=>{
        [...playBtn].map((btn, i) => {
            if(i!==index)btn.classList.remove('clicked');
            if(i===index){
                if(btn.classList.contains('clicked')){
                    audio.pause();
                    btn.classList.remove('clicked');
                }else{
                    btn.classList.add('clicked');
                }
            };
            updatePlayBtn(btn);
        });
    })
});

audio.addEventListener('ended', () => {
    [...playBtn].map((item) => {
        item.classList.remove('clicked');
        updatePlayBtn(item);
    })
})