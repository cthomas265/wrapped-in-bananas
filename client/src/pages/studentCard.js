import React from "react";

const StudentCard = (props) => {
  return (
    <section className="page-content">
      <img src={props.img} alt="student image" className="page-image" />
        <h2 className="page-header">{props.name}</h2>
        <p className="page-text">{props.bio}</p>
    </section>
  );
};

export default StudentCard;
