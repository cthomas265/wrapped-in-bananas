import React from "react";

const StudentCard = (props) => {
  return (
    <div className="page-content">
      <img src={props.img} alt="student image" className="page-image" />
      <div>
        <h2 className="page-header">{props.name}</h2>
        <p className="page-text">{props.bio}</p>
      </div>
    </div>
  );
};

export default StudentCard;
