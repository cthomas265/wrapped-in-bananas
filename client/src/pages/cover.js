import pic from "./images/cover.png";

function FrontCover() {
  return (
    <div className="page-cover">
      <div className="book-cover-pic">
        <img className="cover-img" src={pic} alt="pic" />
      </div>
      <div className="coverContent">
        <h1>YearBook</h1>
      </div>
    </div>
  );
}

function BackCover() {
  return (
    <div className="page-cover">
      <div className="book-cover-pic">
        <img className="cover-img" src={pic} alt="pic" />
      </div>
      <div className="coverContent">
        <h1>End YearBook</h1>
      </div>
    </div>
  );
}

export { FrontCover, BackCover };
