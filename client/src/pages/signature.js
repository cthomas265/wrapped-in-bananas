import React, { useState, useRef } from "react";
import SignaturePad from "react-signature-canvas";
import Popup from "reactjs-popup";

const Signature = () => {
  const [signatures, setSignatures] = useState([]);
  const sigCanvas = useRef({});

  const clear = () => sigCanvas.current.clear();

  const save = () => {
    setSignatures([
      ...signatures,
      sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"),
    ]);
    clear();
    
  };

  return (
    <div className="signaturePage">
      <h1>Signature Page</h1>
      <h3>Leave a message for your class!</h3>
      <Popup
        modal
        overlayStyle
        trigger={<button className={"signatureBtn"}>Open Signature Pad</button>}
        closeOnDocumentClick={true}
        className={"popup"}
      >
        {(close) => (
          <>
            <SignaturePad
              ref={sigCanvas}
              canvasProps={{
                className: "signatureCanvas",
              }}
            />
            <div>
              <button onClick={clear} className={"signatureBtn"}>
                Clear
              </button>
              <button onClick={close} className={"signatureBtn"}>
                Close
              </button>
              <button onClick={save} className={"signatureBtn"}>
                Save
              </button>
            </div>
          </>
        )}
      </Popup>
      <div>
        {signatures.map((signature) => {
          return (
            <img
              src={signature}
              alt="signature"
              className={"signatureImage"}
              key={signature}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Signature;
