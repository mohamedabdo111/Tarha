import React from "react";
import ImagesDetails from "../../Components/details/imagedetails";
import { Container } from "react-bootstrap";

import DateDetails from "../../Components/details/dateDetails";

import { useParams } from "react-router-dom";
import GetOneOfferDetailsHock from "../../all_Hocks/getProduct/getOneOfferDetailsHock";

const OfferDetailsPage = () => {
  const { id } = useParams();
  const [details, loadingRes] = GetOneOfferDetailsHock(id);
  console.log(details);

  return (
    <Container>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-3 my-12 ">
        <DateDetails productData={details}></DateDetails>
        <ImagesDetails
          Images={details ? details.url : null}
          load={loadingRes}
          ImagesCover={details ? details.mainImageUrl : null}
        ></ImagesDetails>
      </div>
    </Container>
  );
};

export default OfferDetailsPage;
