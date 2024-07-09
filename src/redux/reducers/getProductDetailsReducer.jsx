import { Get_Product_Details } from "../types/types";
import { Get_Offers_Details } from "../types/types";

const intialstate = { productDetails: [], offerDetails: [], loading: true };
const GetOneProductDetailsReducer = (state = intialstate, action) => {
  switch (action.type) {
    case Get_Product_Details:
      return {
        ...state,
        productDetails: action.data,
        loading: false,
      };
    case Get_Offers_Details: {
      return { ...state, offerDetails: action.data, loading: false };
    }
    default: {
      return state;
    }
  }
};

export default GetOneProductDetailsReducer;
