import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, makeStyles, Button } from "@material-ui/core";
// import { getOneProduct } from './api/api';
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Icon } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import green from "@material-ui/core/colors/green";
import AddIcon from "@material-ui/icons/Add";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getSingleProduct } from "./Reduxv1/actons/actions";

import { addToCart } from "./Reduxv1/actons/cartAction";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: "50px auto",
    background: "#fff",
    boxShadow: "0px 0px 16px rgba(0,0,0,0.3)",
  },
  icon: {
    display: "flex",
    color: "grey",

    justifyContent: "flex-end",
  },
  outIcon: {
    display: "flex",
    margin: "50px",
    justifyContent: "center",
    alignItems: "center",
    width: "60px",
    height: "60px",
    border: "1px solid #f2f2f2",
    borderRadius: "50%",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
    cursor: "pointer",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  pimg: {
    width: "260px",
    margin: "10px 30px 100px 100px",
  },
  button: {
    margin: "0px auto",
    display: "flex",
    "& > *": {
      margin: "10px",
      padding: "15px 30px",
    },
  },
  right: {
    padding: "40px",
  },
  offer: {
    color: green[500],
  },
  innerOffer: {
    display: "flex",
    margin: "10px",
    flexWrap: "no-wrap",
    alignItems: "center",
    "&>:nth-child(2)": {
      fontSize: "16px",
      marginLeft: "10px",
    },
  },
  sizebtn: {
    fontSize: "20px",
    margin: "20px",
    borderRadius: 50,
    background: "#fff",
    fontWeight: "bold",
    width: 70,
    height: 70,
    "&:hover": {
      background: "#111",
      color: "#fff",
      border: "5px solid #fff",
    },
  },
  sizeText: {
    color: "#111",
    fontWaight: "bold",
    fontSize: "25px",
  },
  sizeBox: {
    display: "flex",
    alignItems: "center",
  },
  qtybtn: {
    fontSize: "30px",
    margin: "20px",

    borderRadius: 50,
    background: "#fff",
    fontWeight: "bold",
    width: 70,
    height: 70,
    "&:hover": {
      background: "#111",
      color: "#fff",
      border: "5px solid #fff",
    },
  },
  qtybox: {
    display: "flex",
    alignItems: "center",
  },
  qtytext: {
    color: "#111",
    fontSize: "25px",
    fontWaight: "bold",
    marginRight: "70px",
  },
}));

const SingleProduct = ({ match }) => {
  const style = useStyles();
  // const [product, setproduct] = useState([]);
  const [size, setSize] = useState("sm");
  const [qty, setQty] = useState(0);

  const dispatch = useDispatch();
  const history = useHistory();

  const productDetails = useSelector((state) => state.productDetails);

  const { loading, sproduct } = productDetails;

  useEffect(() => {
    dispatch(getSingleProduct(match.params.id));
  }, [dispatch, match]);

  const addToCartHandle = () => {
    dispatch(addToCart(sproduct.id));
    history.push("/cart/item");
  };

  console.log('sproduct0',sproduct)
  return (
    <>
      {loading ? (
        <h1>Loadig.......</h1>
      ) : (
        <Grid container className={style.root}>
          <Grid item sm={12} md={6} lg={6}>
            <Box className={style.main}>
              <Box className={style.icon}>
                <Icon className={style.outIcon}>
                  <FavoriteIcon color="disabled" style={{ fontSize: 35 }} />
                </Icon>
              </Box>
              <img src={sproduct?.thumbnail} className={style.pimg} />

              <Box className={style.button}>
                <Button
                  onClick={addToCartHandle}
                  variant="outlined"
                  color="primary"
                  startIcon={<AddShoppingCartIcon />}
                >
                  ADD TO CART
                </Button>

                <Link>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<EmojiPeopleIcon />}
                  >
                    BUY NOW
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={12} md={6} lg={6}>
            <Box className={style.right}>
              <Typography
                variant="h5"
                style={{ fontWeight: "bold", margin: "10px 0px" }}
              >
                {sproduct.title}
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography style={{ fontSize: "24px", marginRight: "20px" }}>
                  {sproduct.price}{" "}
                  <span style={{ color: "#7f7f7f", fontSize: "18px" }}>
                    <del>{sproduct.price * 10}</del>
                  </span>
                </Typography>
                <Typography style={{ color: green[500] }}>20% off</Typography>
              </Box>
              <Typography style={{ color: "blue" }}>
                be the first review this product{" "}
              </Typography>
              <Typography>available offers</Typography>
              <Box>
                <Box className={style.innerOffer}>
                  <LocalOfferIcon className={style.offer} />
                  <Typography>
                    Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit
                    CardT&C
                  </Typography>
                </Box>
                <Box className={style.innerOffer}>
                  <LocalOfferIcon className={style.offer} />
                  <Typography>
                    Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit
                    CardT&C
                  </Typography>
                </Box>
                <Box className={style.innerOffer}>
                  <LocalOfferIcon className={style.offer} />
                  <Typography>
                    Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit
                    CardT&C
                  </Typography>
                </Box>
                <Typography>
                  1 year manufacturer Warranty <span>know more </span>{" "}
                </Typography>
              </Box>

              {sproduct.category === "men's clothing" && "women's clothing" ? (
                <Box className={style.sizeBox}>
                  <Typography className={style.sizeText}>
                    Size : <span>{size}</span>{" "}
                  </Typography>
                  <Button
                    variant="contained"
                    className={style.sizebtn}
                    value="sm"
                    onClick={() => setSize("sm")}
                  >
                    sm
                  </Button>
                  <Button
                    variant="contained"
                    className={style.sizebtn}
                    value="xl"
                    onClick={() => setSize("xl")}
                  >
                    xl
                  </Button>

                  <Button
                    variant="contained"
                    className={style.sizebtn}
                    onClick={() => setSize("xxl")}
                  >
                    xxl
                  </Button>
                  <Button
                    variant="contained"
                    className={style.sizebtn}
                    value="xxl"
                    onClick={() => setSize("lg")}
                  >
                    lg
                  </Button>
                </Box>
              ) : (
                ""
              )}
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default SingleProduct;
