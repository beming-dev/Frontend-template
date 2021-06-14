let btnHeart = document.getElementsByClassName('table_heart');
let albumBox = document.getElementsByClassName('album_box');

console.log(btnHeart);

let heart_click = [false, false, false, false, false];

[...btnHeart].map((item, index) => {
    item.addEventListener('click', () => {
        if(!heart_click[index]){
            item.src = "assets/images/player/heart_pink.svg";
            heart_click[index] = true;
        }else{
            item.src = "assets/images/player/heart.svg";
            heart_click[index] = false;
        }
        
    })
});

[...albumBox].map((item, index) => {
    item.addEventListener('mouseover', () => {
        let image = document.querySelector(`.album_box0${index+1} .album_image`);
        image.style.opacity = "0.4";
    })
});

[...albumBox].map((item, index) => {
    item.addEventListener('mouseout', () => {
        let image = document.querySelector(`.album_box0${index+1} .album_image`);
        image.style.opacity = "1";
    })
});