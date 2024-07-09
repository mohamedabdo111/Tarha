import baseurl from "../Api/baseurl";

export const UseDeletData = async (url) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseurl.delete(url, config);
  return res.data;
};
