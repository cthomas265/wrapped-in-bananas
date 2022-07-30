import React from "react";
import HTMLFlipBook from "react-pageflip";
import './styles.scss'

const Page = React.forwardRef((props, ref) => {
    return (
      <div className="demoPage" ref={ref}>
        {" "}
        <h1>Josh</h1>
        <p>{props.children}</p>
        <p>Page number: {props.number}</p>
      </div>
    );
  });
  
  function StudentPage(props) {
    return (
      <HTMLFlipBook width={300} height={500}>
        <Page number="1">Page 1</Page>
        {/* These need to be changed to Page components */}
        <Page className="demoPage" number='2'>Page 2</Page>
        <Page className="demoPage" number='3'>Page 3</Page>
        <Page className="demoPage" number='4'>Page 4</Page>
      </HTMLFlipBook>
    );
  }

  export default StudentPage;