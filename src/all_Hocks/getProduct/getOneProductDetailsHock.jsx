import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOneProductAction } from "../../redux/actions/getProductDetailsAction";

const GetOneProductDetailsHock = (id) => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(GetOneProductAction(id));
      setLoading(false);
    };
    get();
  }, []);

  const res = useSelector((item) => item.PRODUCTDETAILS.productDetails);
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

export default GetOneProductDetailsHock;
