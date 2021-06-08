let searchIcon = document.querySelector('.icon_search');
let searchBox = document.querySelector('.search_text');

searchIcon.addEventListener('mouseover', () => {
    searchBox.style.width = "100px";
    searchBox.style.borderBottom = "1px solid white";
});

searchIcon.addEventListener('mouseout', () => {
    searchBox.style.width = "0";
    searchBox.style.borderBottom = "none";
});

searchBox.addEventListener('mouseover', () => {
    searchBox.style.width = "100px";
    searchBox.style.borderBottom = "1px solid white";
});

searchBox.addEventListener('mouseout', () => {
    searchBox.style.width = "0";
    searchBox.style.borderBottom = "none";
});