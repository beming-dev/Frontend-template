let btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    btn.style.width = "50px";
    btn.innerHTML = "";
    btn.style.borderRadius = "50px";
    let div = document.createElement('div');
    div.classList = "circle";
    setTimeout(() => {
        btn.appendChild(div);
    }, 300);
    
    setTimeout(() => {
        div.remove();
        let div2 = document.createElement('div');
        div2.classList = 'check';
        btn.appendChild(div2);
    }, 1000)
})