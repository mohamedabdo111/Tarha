import { Post_Login } from "../types/types";

const initial = { Login: [], loading: true };
const PostLoginReducer = (state = initial, action) => {
  switch (action.type) {
    case Post_Login: {
      return { ...state, Login: action.data, loading: false };
    }
    default: {
      return state;
    }
  }
};

export default PostLoginReducer;
