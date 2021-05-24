let firstPageHeight = 0;
let secondPageHeight = 700;
let thirdPageHeight = 700 + document.getElementsByClassName("third-page")[0].clientHeight
console.log(thirdPageHeight);

let currentPage = "first";
function onWheel(e){
    window.removeEventListener('wheel', onWheel);
    if(e.deltaY < 0){
        console.log(1);
        switch(currentPage){
            case "first":
                break;
            case "second":
                window.scrollTo({top:firstPageHeight, left:0, behavior:'smooth'});
                currentPage = "first"
                break;
            case "third":
                window.scrollTo({top:secondPageHeight, left:0, behavior:'smooth'});
                currentPage = "second"
                break;
        }
    }else{
        console.log(2);
        switch(currentPage){
            case "first":
                window.scrollTo({top:secondPageHeight, left:0, behavior:'smooth'});
                currentPage = "second"
                break;
            case "second":
                window.scrollTo({top:thirdPageHeight, left:0, behavior:'smooth'});
                currentPage = "third"
                break;
            case "third":
                break;
        }
    }
    // e.stopPropagation();
    setTimeout(() => {
        window.addEventListener('wheel', onWheel, {once:true, passive:false});
    }, 600)
}

window.addEventListener('wheel', onWheel, {once:true, passive:false})






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