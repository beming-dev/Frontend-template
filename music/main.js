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
let start = 0;
let end = 0;
function onTouchStart(e){
    console.log(1);
    start = e.touches[0].clientY;
}
function onTouchEnd(e){
    end = e.changedTouches[0].clientY;
    let diff = start - end;
    if(diff > 0){
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
    }else if(diff <0){
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
    }
    pageMove(currentPage);
}

window.addEventListener('touchstart', onTouchStart);
window.addEventListener('touchend', onTouchEnd);






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