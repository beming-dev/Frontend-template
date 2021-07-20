import "./style.scss";

const Navigation = () => {
  return (
    <div className="Navigation">
      <img src="images/icons/logo.png" alt="logo" className="logo" />
      <ul className="navList">
        <li>History</li>
        <li>News</li>
        <li>Visitors</li>
        <li>Community</li>
      </ul>
      <div className="icons">
        <img src="images/icons/search.png" alt="search" />
        <img src="images/icons/my.png" alt="my" />
      </div>
    </div>
  );
};

export default Navigation;
