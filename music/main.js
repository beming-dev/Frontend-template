let firstPageHeight = 0;
let secondPageHeight = document.getElementsByClassName('header')[0].clientHeight + document.getElementsByClassName("first-page")[0].clientHeight;
let thirdPageHeight = secondPageHeight + document.getElementsByClassName("second-page")[0].clientHeight;

let currentPage = "first";
pageMove(currentPage);

function pageMove(currentPage){
    switch(currentPage){
        case "first":
            window.scrollTo({top:firstPageHeight, left:0, behavior:'smooth'});
            break;
        case "second":
            window.scrollTo({top:secondPageHeight, left:0, behavior:'smooth'});
            break;
        case "third":
            window.scrollTo({top:thirdPageHeight, left:0, behavior:'smooth'});
            break;
    }
}

function onWheel(e){
    window.removeEventListener('wheel', onWheel);
    if(e.deltaY < 0){
        switch(currentPage){
            case "first":
                break;
            case "second":
                currentPage = "first"
                break;
            case "third":
                currentPage = "second"
                break;
        }
    }else{
        switch(currentPage){
            case "first":
                currentPage = "second"
                break;
            case "second":
                currentPage = "third"
                break;
            case "third":
                break;
        }
    }
    pageMove(currentPage);
    setTimeout(() => {
        window.addEventListener('wheel', onWheel, {once:true, passive:false});
    }, 600)
}

window.addEventListener('wheel', onWheel, {once:true, passive:false})



//mobile
let startY;
function onTouchStart(e){
    startY = e.touches[0].clientY;
    console.log(startY);
}

function onTouchMove(e){
    window.removeEventListener('touchmove', onTouchMove);
    let diff = startY - e.touches[0].clientY;

    if(diff < 0){
        switch(currentPage){
            case "first":
                break;
            case "second":
                currentPage = "first"
                break;
            case "third":
                currentPage = "second"
                break;
        }
    }else{
        switch(currentPage){
            case "first":
                currentPage = "second"
                break;
            case "second":
                currentPage = "third"
                break;
            case "third":
                break;
        }
    }
    pageMove(currentPage);
    setTimeout(() => {
        window.addEventListener('touchmove', onTouchMove, {once:true, passive:false});
    }, 600)
}

window.addEventListener('touchmove', onTouchMove, {once:true, passive:false})
window.addEventListener('touchstart', onTouchStart)






// window.addEventListener('scroll', onScroll);
// let before = document.documentElement.scrollTop
// function onScroll(e){
//     let after = document.documentElement.scrollTop;
//     if(before < after){
//         console.log("up");
//     }else{
//         console.log("down");
//     }
//     before = after;
// }