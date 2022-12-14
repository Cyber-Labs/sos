import React from 'react';

const Heading = ({ text }) => {
  return (
    <>
      <h1
        style={{
          fontFamily: 'monospace',
          marginBottom: 0,
          textAlign: 'center',
          fontSize: '3rem'
        }}
      >
        {text}
      </h1>
      <hr
        style={{
          color: 'black',
          backgroundColor: 'black',
          height: 3,
          border: 0,
          width: '90%',
        }}
      />
    </>
  );
};

export default Heading;
