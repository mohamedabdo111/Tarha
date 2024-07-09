import { combineReducers } from "redux";
import GetAllProductReducer from "./getAllProductReducer";
import GetOneProductDetailsReducer from "./getProductDetailsReducer";
import PostLoginReducer from "./PostLoginReducer";
import { PostProductAdminReducer } from "./PostAdminReducer";

export default combineReducers({
  ALLPRODUCTS: GetAllProductReducer,
  PRODUCTDETAILS: GetOneProductDetailsReducer,
  LOGIN: PostLoginReducer,
  POSTPRODUCT: PostProductAdminReducer,
});
