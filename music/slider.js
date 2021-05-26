let items = document.getElementsByClassName('slider-item');

[...items].map((item) => {
    item.addEventListener('click', onItemClick)
})

function onItemClick(e){
    let center = document.querySelector(".center");
    let slider = document.querySelector('.slider');

    [...items].map((item) =>{
        if(item.classList.contains("center")){
            item.classList.remove("center");
            item.classList.add("popular");
        }
    })
    e.target.classList.remove("popular");
    e.target.classList.add("center");

    let diff = center.dataset.count - e.target.dataset.count;
    switch(diff){
        case -2:
            // moveItem(slider.clientWidth * -17 /100);
            slider.appendChild(slider.firstElementChild);
            slider.appendChild(slider.firstElementChild);
            break;
        case -1:
            // slider.appendChild(slider.firstElementChild);
            slider.appendChild(slider.firstElementChild);
            break;
        case 1:
            slider.insertBefore(slider.lastElementChild, container.firstElementChild);
            break;
        case 2:
            slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
            slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
            break;
    }

    [...items].map((item, index) => {
        item.dataset.count = index + 1;
    })
}