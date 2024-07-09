import React, { useState } from "react";
import ImagesDetails from "../../Components/details/imagedetails";
import { Container } from "react-bootstrap";
import DateDetails from "../../Components/details/dateDetails";
import GetOneProductDetailsHock from "../../all_Hocks/getProduct/getOneProductDetailsHock";
import { useParams } from "react-router-dom";

const ProductDeatilsPage = () => {
  const { id } = useParams();
  const [details, loadingRes] = GetOneProductDetailsHock(id);

  console.log(details);

  return (
    <Container>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-3 my-12  ">
        <DateDetails productData={details}></DateDetails>
        <ImagesDetails
          Images={details ? details.url : null}
          load={loadingRes}
        ></ImagesDetails>
      </div>
    </Container>
  );
};

export default ProductDeatilsPage;
