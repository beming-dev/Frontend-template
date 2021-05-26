let items = document.getElementsByClassName("slider-item");
let use = true;

[...items].map((item) => {
  item.addEventListener("click", onItemClick);
});

function onItemClick(e) {
  if (use) {
    use = false;
    let center = document.querySelector(".center");
    let slider = document.querySelector(".slider");

    //move center
    [...items].map((item) => {
      if (item.classList.contains("center")) {
        item.classList.remove("center");
        item.classList.add("popular");
      }
    });
    e.target.classList.remove("popular");
    e.target.classList.add("center");

    let diff = center.dataset.count - e.target.dataset.count;
    switch (diff) {
      case -2:
        slider.appendChild(newImg(slider.firstElementChild));
        slider.appendChild(newImg(slider.children[1]));
        moveForward(items, slider, diff);
        break;
      case -1:
        slider.appendChild(newImg(slider.firstElementChild));
        moveForward(items, slider, diff);
        break;
      case 1:
        slider.insertBefore(
          newImg(slider.lastElementChild),
          slider.firstElementChild
        );
        moveBackward(items, slider, diff);
        break;
      case 2:
        slider.insertBefore(
          newImg(slider.lastElementChild),
          slider.firstElementChild
        );
        slider.insertBefore(
          newImg(slider.children[4]),
          slider.firstElementChild
        );
        moveBackward(items, slider, diff);
        break;
    }
    // slider = document.querySelector('.slider');
    // items = document.getElementsByClassName('slider-item');

    setTimeout(() => {
      switch (diff) {
        case -2:
          slider.firstElementChild.remove();
          slider.firstElementChild.remove();
          break;
        case -1:
          slider.firstElementChild.remove();
          break;
        case 1:
          slider.lastElementChild.remove();
          break;
        case 2:
          slider.lastElementChild.remove();
          slider.lastElementChild.remove();
          break;
      }
      [...items].map((item, i) => {
        item.dataset.count = i + 1;
        item.removeAttribute("style");
      });
      use = true;
    }, 500);
  }
}

function newImg(target) {
  let img = document.createElement("img");
  img.src = target.src;
  img.classList = target.classList;
  img.addEventListener("click", onItemClick);
  return img;
}

function moveForward(items, slider, diff) {
  [...items].map((item) => {
    item.style.transitionDuration = "0.5s";
    item.style.transform = `translateX(${
      ((slider.clientWidth * 17) / 100) * diff
    }px)`;
  });
}

function moveBackward(items, slider, diff) {
  [...items].map((item) => {
    item.style.transform = `translateX(${
      ((slider.clientWidth * -17) / 100) * diff
    }px)`;
  });

  [...items].map((item) => {
    item.style.transitionDuration = "0.5s";
    item.style.transform = `translateX(0px)`;
  });
}
