export default function colorThief(){
    const colorThief = new ColorThief();

    let img = document.querySelector('.profile');
    let secondPage = document.querySelector('.second-page');
    
    if (img.complete) {
        let dominant = colorThief.getColor(img);
        secondPage.style = `background-color:rgb(${dominant[0]}, ${dominant[1]}, ${dominant[2]})`
        
    } else {
        img.addEventListener('load', function() {
            let dominant = colorThief.getColor(img);
            secondPage.style = `background-color:rgb(${dominant[0]}, ${dominant[1]}, ${dominant[2]})`
        });
    }
}