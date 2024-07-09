import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOfferDetailsAction } from "../../redux/actions/getProductDetailsAction";

const GetOneOfferDetailsHock = (id) => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(GetOfferDetailsAction(id));
      setLoading(false);
    };
    get();
  }, []);

  const res = useSelector((item) => item.PRODUCTDETAILS.offerDetails);
  const loadingRes = useSelector((item) => item.PRODUCTDETAILS.loading);

  useEffect(() => {
    if (loading === false) {
      if (res && res.statusCode === 200) {
        setDetails(res.data);
      }
    }
  }, [loading]);

  return [details, loadingRes];
};

export default GetOneOfferDetailsHock;
