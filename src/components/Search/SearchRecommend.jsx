import "../../styles/searchRecommend.css";

export default function SearchRecommend() {
  return (
    <div className="container">
      <h3>Recommend</h3>
      <div className="item_container">
        <div className="item">
          <p>Your Favourite</p>
        </div>
        <div className="item">
          <p>Pop</p>
        </div>
        <div className="item">
          <p>Hip-Hop</p>
        </div>
        <div className="item">
          <p>Rock</p>
        </div>
        <div className="item">
          <p>R&B</p>
        </div>
        <div className="item">
          <p>Jazz</p>
        </div>
      </div>
    </div>
  );
}
