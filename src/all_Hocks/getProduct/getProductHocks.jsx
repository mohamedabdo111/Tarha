import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllOffersAction,
  GetAllProductAction,
} from "../../redux/actions/getAllProductAction";

const GetProductHocks = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const [dataOffers, setDataOffers] = useState("");

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(GetAllProductAction());
      await dispatch(GetAllOffersAction());
      setLoading(false);
    };
    get();
  }, []);

  const res = useSelector((item) => item.ALLPRODUCTS.AllProduct);
  const resOffers = useSelector((item) => item.ALLPRODUCTS.AllOffers);
  useEffect(() => {
    if (loading === false) {
      if (res && res.statusCode === 200) {
        setData(res.data);
      }
      if (resOffers && resOffers.statusCode === 200) {
        setDataOffers(resOffers.data);
      }
    }
  }, [loading]);

  return [data, dataOffers];
};

export default GetProductHocks;
