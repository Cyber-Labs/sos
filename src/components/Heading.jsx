import React from "react";

const Heading = ({ text }) => {
  return (
    <>
      <h1 style={{ fontFamily: "monospace", marginBottom:0 }}>{text}</h1>
      <hr
        style={{
          color: 'black',
          backgroundColor: 'black',
          height: 3,
          border:0
        }}
      />
    </>
  );
};

export default Heading;
