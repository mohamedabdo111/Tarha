import { act } from "react";
import {
  Delete_Offer,
  Delete_Product,
  Post_Offer,
  Post_Product,
} from "../types/types";

const intial = {
  AddProduct: [],
  DeleltProduct: [],
  PostOffers: [],
  DeleteOffer: [],
  loading: true,
};

export const PostProductAdminReducer = (state = intial, action) => {
  switch (action.type) {
    case Post_Product: {
      return { ...state, AddProduct: action.data, loading: false };
    }
    case Post_Offer: {
      return { ...state, PostOffers: action.data, loading: false };
    }
    case Delete_Product: {
      return { ...state, DeleltProduct: action.data, loading: false };
    }
    case Delete_Offer: {
      return { ...state, DeleteOffer: action.data, loading: false };
    }
    default: {
      return state;
    }
  }
};
