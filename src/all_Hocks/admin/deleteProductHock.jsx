import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProductAction } from "../../redux/actions/PostProductAction";

const DeleteProductHock = () => {
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
    await dispatch(DeleteProductAction(id));
    setLoading(false);
  };

  const res = useSelector((item) => item.POSTPRODUCT.DeleltProduct);

  useEffect(() => {
    if (loading === false) {
      if (res && res.statusCode === 200) {
        window.location.reload();
      }
    }
  }, [loading]);

  return [onClick, handleClose, handleShow, show];
};

export default DeleteProductHock;
