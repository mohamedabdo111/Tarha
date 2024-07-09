import { type } from "@testing-library/user-event/dist/type";
import { UseGetDate } from "../../hooks/useGetDate";
import { Get_Offers_Details, Get_Product_Details } from "../types/types";

export const GetOneProductAction = (id) => async (dispatch) => {
  try {
    const res = await UseGetDate(`/Product/Detail${id}`);
    dispatch({
      type: Get_Product_Details,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Get_Product_Details,
      data: error.response,
    });
  }
};

export const GetOfferDetailsAction = (id) => async (dispatch) => {
  try {
    const res = await UseGetDate(`/Offer/Detail${id}`);
    dispatch({
      type: Get_Offers_Details,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Get_Offers_Details,
      data: error.response,
    });
  }
};
