import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./styles.scss";
import StudentData from "./studentData";
import StudentCard from "./studentCard";

const Page = React.forwardRef((props, ref) => {
  return (
    <section className="page">
      <div className="demoPage" ref={ref}>
        {" "}
        <div className="page-content">
        </div>
        {props.children}
        <p>Page number: {props.number}</p>
      </div>
    </section>
  );
});

function StudentPage(props) {
  return (
    <HTMLFlipBook width={300} height={500}>
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
