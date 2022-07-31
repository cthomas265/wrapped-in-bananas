import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./styles.scss";
import StudentData from "./studentData";
import StudentCard from "./studentCard";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      {" "}
      <div className="student-container">
        {StudentData.map((val, i) => {
          return (
            <StudentCard 
            key={i} 
            img={val.img} 
            name={val.name} 
            bio={val.bio} />
          );
        })}
      </div>
      <p>Page number: {props.number}</p>
    </div>
  );
});

function StudentPage(props) {
  return (
    <HTMLFlipBook width={window.innerWidth} height={window.innerHeight}>
      <Page number="1"></Page>
      {/* These need to be changed to Page components */}
      <Page className="demoPage" number="2">
        Page 2
      </Page>
      <Page className="demoPage" number="3">
        Page 3
      </Page>
      <Page className="demoPage" number="4">
        Page 4
      </Page>
    </HTMLFlipBook>
  );
}

export default StudentPage;
