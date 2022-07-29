import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const Signature = () => {
  let sigPad = useRef({});
  let data = "";

  function clear() {
    sigPad.current.clear();
  }

  function save() {
    data = sigPad.current.toDataURL();
  }

  function show() {
    sigPad.current.fromDataURL(data);
  }

  return (
    <div className={"container"}>
      <div className={"sigContainer"}>
        <SignatureCanvas
          ref={sigPad}
          className={"sigPad"}
          backgroundColor="rgb(95, 195, 152)"
        />
      </div>
      <div>
        <button onClick={clear} className={"buttons"}>
          Clear
        </button>
        <button onClick={save} className={"buttons"}>
          Save
        </button>
        <button onClick={show} className={"buttons"}>
          Show
        </button>
      </div>
    </div>
  );
};

export default Signature;
