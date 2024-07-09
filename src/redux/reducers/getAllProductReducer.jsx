import { Get_All_Offers, Get_All_Product } from "../types/types";

const intial = { AllProduct: [], AllOffers: [], loading: true };
const GetAllProductReducer = (state = intial, action) => {
  switch (action.type) {
    case Get_All_Product:
      return {
        ...state,
        AllProduct: action.data,
        loading: false,
      };
    case Get_All_Offers: {
      return { ...state, AllOffers: action.data, loading: false };
    }
    default:
      return state;
  }
};

export default GetAllProductReducer;
