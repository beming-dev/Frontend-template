let slider = document.querySelector('slider');
let items = document.getElementsByClassName('slider-item');

[...items].map((item) => {
    item.addEventListener('click', onItemClick)
})

function onItemClick(e){
    console.log(e.target.dataset.count);
    [...items].map((item) =>{
        item.style = 'transform: translate3d(150px, 0, 0)';
        item.classList.remove("center");
    })
    e.target.classList.add("center");
}