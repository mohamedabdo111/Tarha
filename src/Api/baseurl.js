import axios from "axios";

const baseurl = axios.create({ baseURL: "http://tarha.runasp.net/api" });

export default baseurl;
