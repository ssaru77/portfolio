import React from "react";

const ImageCard = ({cartoon, className}) => {
  return (
    <div >
      <img className={className} src={cartoon?.image} />
    </div>
  );
};

export default ImageCard;
