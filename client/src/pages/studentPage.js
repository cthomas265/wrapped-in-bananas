import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./styles.scss";
import StudentData from "./studentData";
import StudentCard from "./studentCard";
import FrontCover from "./frontCover";
import PaddingPage from "./paddingPage";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">{props.children}</div>
    </div>
  );
});

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
    <HTMLFlipBook width={600} height={800}>
      <PageCover>
        <PaddingPage />
      </PageCover>
      <PageCover>
        <FrontCover />
      </PageCover>
      {StudentData.map((val, i) => {
        return (
          <Page number={i + 1} key={i} className="page">
            <StudentCard img={val.img} name={val.name} bio={val.bio} />
          </Page>
        );
      })}
      <PageCover>
        <PaddingPage />
      </PageCover>
      <PageCover>
        <FrontCover />
      </PageCover>
    </HTMLFlipBook>
  );
}

export default StudentPage;
