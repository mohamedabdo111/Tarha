import { type } from "@testing-library/user-event/dist/type";
import baseurl from "../../Api/baseurl";
import { Get_All_Offers, Get_All_Product } from "../types/types";
import { UseGetDate } from "../../hooks/useGetDate";

export const GetAllProductAction = () => async (dispatch) => {
  try {
    const res = await UseGetDate("/Product/GetProducts");
    dispatch({
      type: Get_All_Product,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Get_All_Product,
      data: error.response,
    });
  }
};

export const GetAllOffersAction = () => async (dispatch) => {
  try {
    const res = await UseGetDate("/Offer/GetOffers");

    dispatch({
      type: Get_All_Offers,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Get_All_Offers,
      data: error.response,
    });
  }
};
