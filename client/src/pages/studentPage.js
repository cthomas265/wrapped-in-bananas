import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./styles.scss";
import StudentData from "./studentData";
import StudentCard from "./studentCard";
import FrontCover from "./frontCover";
import BackCover from "./backCover";
import ClassCollage from "./classCollage"
import PetCollage from "./petCollage"
import Signature from "./signature"

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">{props.children}</div>
    </div>
  );
});

const InsertPage = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">{props.children}</div>
    </div>
  );
});

// const BackPage = React.forwardRef((props, ref) => {
//   return (
//     <div className="page" ref={ref}>
//       <div className="page-content">{props.children}</div>
//     </div>
//   );
// });

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        {" "}
        {props.children}
        <p>Page number: {props.number}</p>
      </div>
    </div>
  );
});

function StudentPage(props) {
  return (
    <HTMLFlipBook width={900} height={850} className="demo-block600">
      <PageCover>
        <FrontCover />
      </PageCover>
      <InsertPage>
        <ClassCollage />
      </InsertPage>
      {StudentData.map((val, i) => {
        return (
          <Page number={i + 1} key={i} className="page">
            <StudentCard img={val.img} name={val.name} bio={val.bio} />
          </Page>
        );
      })}
      <InsertPage>
        <Signature />
      </InsertPage>
      <InsertPage>
        <PetCollage />
      </InsertPage>
      <PageCover>
        <BackCover />
      </PageCover>
    </HTMLFlipBook>
  );
}

export default StudentPage;
