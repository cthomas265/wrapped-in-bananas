import pic from "./images/cover.png";

function FrontCover() {
  return (
    <div className="page-cover" style={{backgroundImage: `url(${pic})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover", width: 650, height: 700}}>
      <div className="coverContent">
      </div>
    </div>
  );
}

function BackCover() {
  return (
    <div className="page-cover">
      <div className="cover-content">
        <h1>Now Your Story Begins</h1>
        <h1>Congratulations!!!</h1>
      </div>
    </div>
  );
}

export { FrontCover, BackCover };
