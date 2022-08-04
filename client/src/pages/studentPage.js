import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./styles.scss";
import StudentData from "./studentData";
import StudentCard from "./studentCard";
import{ FrontCover, BackCover} from "./cover";
import {ClassCollage, PetCollage } from "./collage"

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover page-cover-top" ref={ref} data-density="hard" >
      <div className="page-content" >{props.children}</div>
    </div>
  );
});

const PageCoverBack = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover page-cover-bottom" ref={ref} data-density="hard" >
      <div className="page-content" >{props.children}</div>
    </div>
  );
});

const InsertPage = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref}>
      <div className="page-content">{props.children}</div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div>
      <div className="page" ref={ref}>
        {props.children}
      </div>
    </div>
  );
});

function StudentPage(props) {
  return (
    <HTMLFlipBook width={900} height={700} className="demo-block">
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
        <PetCollage />
      </InsertPage>
      <PageCoverBack>
        <BackCover />
      </PageCoverBack>
    </HTMLFlipBook>
  );
}

export default StudentPage;
