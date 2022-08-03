import React from "react";

const YearbookCard = (props) => {
  return (
    <section className="yearbook">
      <img src={props.img} alt="student image" />
      <h2>{props.name}</h2>
    </section>
  );
};

export default YearbookCard;
