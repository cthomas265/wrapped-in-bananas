import React, { useState, useRef } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { SIGNATURE } from "../utils/queries";
import { ADD_SIGNATURE } from "../utils/mutations";
import SignatureCanvas from "react-signature-canvas";
import { Popup } from "reactjs-popup";

const Signature = () => {
  const [signatures, setSignatures] = useState([]);
  const [string, setString] = useState("");
  const [addSignature] = useMutation(ADD_SIGNATURE);
  const { loading, error, data } = useQuery(SIGNATURE);

  const sigCanvas = useRef({});

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const signatureImgs = data?.signature || [];
  console.log(signatureImgs);

  const clear = () => sigCanvas.current.clear();

  const save = async () => {
    try {
      await setSignatures([
        ...signatures,
        sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"),
      ]);

      await setString(JSON.stringify(signatures));

      const { data } = await addSignature({
        variables: { imageUrl: "newSignature" },
      });

      clear();
    } catch (err) {
      console.log(err);
    }
  };

  console.log(signatures);

  return (
    <div className="signaturePage">
      <h1>Signature Page</h1>
      <h3>Don't forget to sign the yearbook!</h3>
      <Popup
        modal
        overlayStyle
        trigger={<button className={"signatureBtn"}>Open Signature Pad</button>}
        closeOnDocumentClick={true}
        className={"popup"}
      >
        {(close) => (
          <>
            <SignatureCanvas
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
        {/* {data?.signature.map((signatures) => {
          return (
            <img
              src={signatures.imageURL}
              alt="signature"
              className={"signatureImage"}
              key={signatures}
            />
          );
        })} */}
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
