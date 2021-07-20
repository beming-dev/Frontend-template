import Carousel from "../../components/Carousel";
import Navigation from "../../components/Navigation";
import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="content">
        <span className="title">Seongsan Bridge</span>
        <span className="description">
          The Seongsan Bridge is the 12th bridge that crosses the Han River{" "}
          <br /> in South Korea. The bridge was completed in 1980.
        </span>
        <div className="icons">
          <button>Learn more</button>
          <div className="bookmark-out">
            <img src="images/icons/bookmark.png" alt="bookmark" />
          </div>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
