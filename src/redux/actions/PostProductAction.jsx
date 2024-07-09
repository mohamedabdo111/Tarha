import { UseDeletData } from "../../hooks/useDeletData";
import { UsePostData, UsePostDataWithImage } from "../../hooks/usePostData";
import {
  Delete_Offer,
  Delete_Product,
  Post_Offer,
  Post_Product,
} from "../types/types";

export const PostProductAdminAction = (formdata) => async (dispatch) => {
  try {
    const res = await UsePostDataWithImage("/Product/AddProduct", formdata);

    dispatch({
      type: Post_Product,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Post_Product,
      data: error.response,
    });
  }
};

export const PostOffersAction = (formdata) => async (dispatch) => {
  try {
    const res = await UsePostDataWithImage("Offer/AddOffer", formdata);
    dispatch({
      type: Post_Offer,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Post_Offer,
      data: error.response,
    });
  }
};

export const DeleteProductAction = (id) => async (dispatch) => {
  try {
    const res = await UseDeletData(`/Product/DeleteProduct?id=${id}`);
    dispatch({
      type: Delete_Product,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Delete_Product,
      data: error.response,
    });
  }
};
export const DeleteOfferAction = (id) => async (dispatch) => {
  try {
    const res = await UseDeletData(`/Offer/DeleteOffer?id=${id}`);
    dispatch({
      type: Delete_Offer,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Delete_Offer,
      data: error.response,
    });
  }
};
