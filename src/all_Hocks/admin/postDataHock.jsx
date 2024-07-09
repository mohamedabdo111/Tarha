import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import one from "../../Components/images/upload.png";
import { UsePostDataWithImage } from "../../hooks/usePostData";
import {
  PostOffersAction,
  PostProductAdminAction,
} from "../../redux/actions/PostProductAction";
import { Alert } from "react-bootstrap";

const PostDataHock = () => {
  const dispatch = useDispatch();
  const [images, setImages] = useState({});
  const [upload, setUpload] = useState(one);
  const targetRef = useRef(null);

  //usestate for api
  const [imagecover, setImageCover] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [disc, setDisc] = useState("");
  const [price, setPrice] = useState();
  const [loading, setLoading] = useState(true);
  const [alrt, setAlrt] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [ispress, setIspress] = useState(false);

  const AddCover = (e) => {
    // setUpload(e);
    if (e.target.files && e.target.files[0]) {
      setUpload(URL.createObjectURL(e.target.files[0]));
      setImageCover(e.target.files[0]);
    }
  };

  const onChangeName = (e) => {
    setNameProduct(e.target.value);
  };
  const onChangedisc = (e) => {
    setDisc(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  console.log(imagecover);
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };
  const onSubmit = async () => {
    const imagearr = Array.from(Array(Object.keys(images).length).keys()).map(
      (i, index) => {
        return dataURLtoFile(images[index], Math.random() + ".png");
      }
    );

    const formdata = new FormData();
    formdata.append("Name", nameProduct);
    formdata.append("Description", disc);
    formdata.append("Price", price);
    formdata.append("MainImg", imagecover);
    imagearr.map((item) => formdata.append("imgs", item));
    setLoading(true);
    setIspress(true);
    await dispatch(PostProductAdminAction(formdata));
    setLoading(false);
  };

  const dateStr = startDate;
  const date = new Date(dateStr);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  const formattedDate = `${month} ${String(day).padStart(2, "0")} ${year}`;

  //   add offerssssss
  const onSubmitOffers = async () => {
    const imagearr = Array.from(Array(Object.keys(images).length).keys()).map(
      (i, index) => {
        return dataURLtoFile(images[index], Math.random() + ".png");
      }
    );

    const formdata = new FormData();
    formdata.append("Name", nameProduct);
    formdata.append("Description", disc);
    formdata.append("Price", price);
    formdata.append("MainImg", imagecover);
    formdata.append("EndIn", formattedDate);
    imagearr.map((item) => formdata.append("imgs", item));
    setLoading(true);
    setIspress(true);
    await dispatch(PostOffersAction(formdata));

    setLoading(false);
  };

  const res = useSelector((item) => item.POSTPRODUCT.AddProduct);
  const resOffers = useSelector((item) => item.POSTPRODUCT.PostOffers);

  useEffect(() => {
    if (loading === false) {
      console.log(resOffers);
      if (res && res.data && res.status === 400) {
        setAlrt(
          <Alert variant="danger">
            <Alert.Heading> </Alert.Heading>
            <p className=" text-center">Enter all data</p>
          </Alert>
        );
      } else if (res && res.data && res.status === 200) {
        setIspress(false);
        setNameProduct("");
        setPrice("");
        setDisc("");
        setImages({});
        setUpload(one);
        setAlrt(
          <Alert variant="success">
            <Alert.Heading> </Alert.Heading>
            <p className=" text-center">Done</p>
          </Alert>
        );
      }

      if (resOffers && resOffers.data && resOffers.status === 400) {
        setAlrt(
          <Alert variant="danger">
            <Alert.Heading> </Alert.Heading>
            <p className=" text-center">Enter all data</p>
          </Alert>
        );
      } else if (resOffers && resOffers.data && resOffers.status === 200) {
        setNameProduct("");
        setPrice("");
        setDisc("");
        setImages({});
        setUpload(one);
        setIspress(false);
        setAlrt(
          <Alert variant="success">
            <Alert.Heading> </Alert.Heading>
            <p className=" text-center">Done</p>
          </Alert>
        );
      }
    }
  }, [loading]);

  setTimeout(() => {
    setAlrt("");
  }, 10000);
  return [
    images,
    setImages,
    upload,
    AddCover,
    crop,
    onSubmit,
    onSubmitOffers,
    onChangeName,
    onChangePrice,
    onChangedisc,
    nameProduct,
    disc,
    price,
    alrt,
    setStartDate,
    startDate,
    ispress,
    loading,
  ];
};

export default PostDataHock;
