import React from "react";

const StudentCard = (props) => {
  return (
    <section className="page-content">
      <img src={props.img} style={{height: "80%", width: "95%"}} alt="student image" className="page-image" />
        <h2 className="page-header">{props.name}</h2>
        <p className="page-text " style={{maxWidth: "95%"}} >{props.bio}</p>
    </section>
  );
};

export default StudentCard;
