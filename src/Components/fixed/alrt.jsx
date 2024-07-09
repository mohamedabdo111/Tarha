import React from "react";

const AlrtContain = ({ text, styel }) => {
  return (
    <Alert variant={styel}>
      <Alert.Heading>{text}</Alert.Heading>
    </Alert>
  );
};

export default AlrtContain;
