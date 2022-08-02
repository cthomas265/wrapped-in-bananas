import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./styles.scss";
import StudentData from "./studentData";
import StudentCard from "./studentCard";

const Page = React.forwardRef((props, ref) => {
  return (
      <div className="page" ref={ref}>
        {" "}
        <div className="page-content">
        {props.children}
        <p className="page-footer">Page number: {props.number}</p>
        </div>
      </div>
  );
});

function StudentPage(props) {
  return (
    <HTMLFlipBook width={500} height={800}>

       {StudentData.map((val, i) => {
          return (
          <Page number={i + 1}  key={i} >
              <StudentCard 
              img={val.img} 
              name={val.name} 
              bio={val.bio} />
          </Page >
          );
        })}
      {/* <Page number="1"></Page> */}
      {/* <Page className="demoPage" number="2">
        Page 2
      </Page>
      <Page className="demoPage" number="3">
        Page 3
      </Page>
      <Page className="demoPage" number="4">
        Page 4
      </Page> */}
    </HTMLFlipBook>
  );
}

export default StudentPage;
