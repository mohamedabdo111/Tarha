import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOfferAction } from "../../redux/actions/PostProductAction";

const DeleteOffertHock = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  //onclickkkk
  const onClick = async (id) => {
    setLoading(true);
    await dispatch(DeleteOfferAction(id));
    setLoading(false);
    setShow(false);
  };

  const res = useSelector((item) => item.POSTPRODUCT.DeleteOffer);

  useEffect(() => {
    if (loading === false) {
      console.log(res);
      if (res && res.statusCode === 200) {
        window.location.reload();
      }
    }
  }, [loading]);

  return [onClick, show, handleClose, handleShow];
};

export default DeleteOffertHock;
