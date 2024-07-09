import baseurl from "../Api/baseurl";

export const UsePostData = async (url, params) => {
  const res = await baseurl.post(url, params);
  return res.data;
};

export const UsePostDataWithImage = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await baseurl.post(url, params, config);
  return response;
};
export const UsePostDataWithoutImage = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await baseurl.post(url, params, config);
  return response;
};
