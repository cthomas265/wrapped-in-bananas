import React, { useRef } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { SIGNATURE } from "../utils/queries";
import { ADD_SIGNATURE } from "../utils/mutations";
import SignatureCanvas from "react-signature-canvas";
import { Popup } from "reactjs-popup";

const Signature = () => {

  // we need to add the "refreshQueries" setting in order to refresh the cache with the latest signature after running the mutation
  // https://www.apollographql.com/docs/react/data/mutations#refetching-queries
  const [addSignature] = useMutation(ADD_SIGNATURE, {
    refetchQueries: [
      {query: SIGNATURE}, // DocumentNode object parsed with gql
      'Signatures' // Query name
    ]
  });
  const { loading, error, data } = useQuery(SIGNATURE);

  const sigCanvas = useRef({});

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const signatureImgs = data?.signatures || [];

  const clear = () => sigCanvas.current.clear();

  const save = async () => {
    try {
      const response = await addSignature({
        variables: { imageURL: sigCanvas.current.getTrimmedCanvas().toDataURL("image/png") },
      });
      console.log(response)

      clear();
    } catch (err) {
      console.log(err);
    }
  };

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
        {signatureImgs.map((signature) => {
          return (
            <img
              src={signature.imageURL}
              alt="signature"
              className={"signatureImage"}
              key={signature._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Signature;