import baseurl from "../Api/baseurl";

export const UseGetDate = async (url, params) => {
  const res = await baseurl.get(url, params);
  return res.data;
};
