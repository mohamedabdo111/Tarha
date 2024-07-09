import axios from "axios";

const baseurl = axios.create({ baseURL: "https://tarhaa.runasp.net/api" });

export default baseurl;
