import React from "react";

const StudentCard = (props) => {
  return (
    <div className="student-card">
      <img src={props.img} alt="student pic" />
      <div>
        <h2>{props.name}</h2>
        <p>{props.bio}</p>
      </div>
    </div>
  );
};

export default StudentCard;
