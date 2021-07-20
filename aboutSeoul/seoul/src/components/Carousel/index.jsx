import React, { useRef } from "react";
import "./style.scss";

const Carousel = () => {
  const slider = useRef();
  const bar = useRef();
  const instruction = useRef();
  const structure = useRef();
  const location = useRef();
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef()];
  const text = [
    { structure: "Lotte Tower", location: "Songpa-Gu" },
    { structure: "N Seoul Tower", location: "Yongsan-Gu" },
    { structure: "01", location: "Songpa-Gu" },
    { structure: "02", location: "Yongsan-Gu" },
    { structure: "03", location: "Yongsan-Gu" },
  ];

  const setText = (no) => {
    instruction.current.style.display = "none";
    setTimeout(() => {
      structure.current.innerText = text[no].structure;
      location.current.innerText = text[no].location;
      instruction.current.style.display = "flex";
    }, 500);
  };

  const onNext = () => {
    for (let i = 0; i < refs.length; i++) {
      let no = refs[i].current.dataset.no;
      setText(no - 1);
      refs[i].current.classList.remove(`img-0${no}`);
      if (no - 1 < 1) no = refs.length;
      else no -= 1;
      refs[i].current.dataset.no = no;
      refs[i].current.classList.add(`img-0${refs[i].current.dataset.no}`);
    }
    setBar();
  };
  const onPrev = () => {
    for (let i = 0; i < refs.length; i++) {
      let no = refs[i].current.dataset.no;
      setText(no - 1);
      refs[i].current.classList.remove(`img-0${no}`);
      no = parseInt(no);
      if (no + 1 > refs.length) no = 1;
      else no += 1;
      refs[i].current.dataset.no = no;
      refs[i].current.classList.add(`img-0${refs[i].current.dataset.no}`);
    }
    setBar();
  };

  const setBar = () => {
    bar.current.style.width = `${
      (slider.current.offsetWidth * refs[1].current.dataset.no) / 5
    }px`;
  };

  return (
    <div className="carousel">
      <span className="name">Discover Other Places in Seoul</span>
      <div className="images">
        <img
          src="images/carousel/carousel_01.png"
          alt="1"
          className="img-01"
          ref={refs[0]}
          data-no="1"
        />
        <img
          src="images/carousel/carousel_02.png"
          alt="2"
          className="img-02"
          ref={refs[1]}
          data-no="2"
        />
        <img
          src="images/carousel/carousel_03.png"
          alt="3"
          className="img-03"
          ref={refs[2]}
          data-no="3"
        />
        <img
          src="images/carousel/carousel_04.png"
          alt="4"
          className="img-04"
          ref={refs[3]}
          data-no="4"
        />
        <img
          src="images/carousel/carousel_05.png"
          alt="5"
          className="img-05"
          ref={refs[4]}
          data-no="5"
        />
        <div className="instruction" ref={instruction}>
          <span className="structure" ref={structure}>
            N Seoul Tower
          </span>
          <span className="location" ref={location}>
            Yongsan-Gu
          </span>
        </div>
      </div>
      <div className="controller">
        <span className="start">01</span>
        <div className="slider" ref={slider}>
          <div className="slider-bar" ref={bar}></div>
        </div>
        <span className="end">05</span>
        <img
          src="images/icons/prev.png"
          alt="prev"
          className="prev btn"
          onClick={onPrev}
        />
        <img
          src="images/icons/next.png"
          alt="next"
          className="next btn"
          onClick={onNext}
        />
      </div>
    </div>
  );
};

export default Carousel;
