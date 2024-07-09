import { type } from "@testing-library/user-event/dist/type";
import { UsePostData } from "../../hooks/usePostData";
import { Post_Login } from "../types/types";

export const PostLoginAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostData("/Auth/Login", data);
    dispatch({
      type: Post_Login,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Post_Login,
      data: error.response,
    });
  }
};
