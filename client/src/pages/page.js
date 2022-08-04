import React from "react";
import HTMLFlipBook from "react-pageflip";
// use query of all users- get all users-map into page

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      {" "}
      <h1>{props.name}</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

function StudentPage(props) {
  return (
    <HTMLFlipBook className="book" width={300} height={500}>
      //react folde of props-connect to graphQL how?
      {props.data.users.map((user) => {
        return <Page key={user._id} number={user.number} name={user.username}>page: {user.number}</Page>;

      })}

    </HTMLFlipBook>
  );
}
    
export default StudentPage;