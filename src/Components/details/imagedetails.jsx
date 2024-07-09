import React, { useState } from "react";
import one from "../images/shop1.jpg";
import two from "../images/handback.jpg";
import SpinnerHock from "../fixed/spinner";

const ImagesDetails = ({ Images, load, ImagesCover }) => {
  // const OneImage = `http://tarha.runasp.net/${Images}`;
  const x = ImagesCover ? `https://tarhaa.runasp.net/${ImagesCover}` : null;
  const [imageOne, setImage] = useState("");
  const onclick = (e) => {
    setImage(e.target.src);
  };

  return (
    <>
      {load ? (
        <SpinnerHock></SpinnerHock>
      ) : (
        <div className=" grid grid-cols-4 gap-2 imagestyle">
          <div className="OneImage col-span-3 rounded-md overflow-auto">
            <img
              src={
                Images && Images.length >= 1 && imageOne === "" ? x : imageOne
              }
              alt="OneImage"
              className=" w-full h-full object-fill"
            />
          </div>
          <div className="allImages imagestyle ">
            <div className=" cursor-pointer rounded-md overflow-hidden mb-2 hoh">
              <img
                src={`https://tarhaa.runasp.net/${ImagesCover}`}
                alt="ImageDetails"
                onClick={onclick}
                className="w-full"
              />
            </div>
            {Images
              ? Images.map((item, index) => {
                  return (
                    <>
                      <div
                        className="  cursor-pointer rounded-md overflow-hidden mb-2 hoh"
                        key={index}
                      >
                        <img
                          src={`https://tarhaa.runasp.net/${item}`}
                          alt="ImageDetails"
                          onClick={onclick}
                        />
                      </div>
                    </>
                  );
                })
              : null}
          </div>
        </div>
      )}
    </>
  );
};

export default ImagesDetails;
