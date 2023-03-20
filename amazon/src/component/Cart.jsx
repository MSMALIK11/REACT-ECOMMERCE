import React, { useState, useEffect } from "react";

import {
  Grid,
  Box,
  Typography,
  Paper,
  Button,
  makeStyles,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";

import DiologThank from "./appbarComponent/DiologThank";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";

import { removeFromCart } from "./Reduxv1/actons/cartAction";
import cartimg from "../images/Empty_Shopping_Cart.jpg";
import GroupButtons from "./GroupButtons";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    padding: "100px",
    background: "#f8f8f8",
  },
  imgBox: {
    // width: "350px",
    height: "300px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "70px",
    "& > img": {
      height: "250px",
      width: "300px",
      objectFit: "contain",
    },
  },
  flex: {
    display: "flex",
    justifyContent: "flex-start",
  },

  title: {
    fontSize: "26px",
    color: "#111",
    fontWeight: "bold",
    margin: "1rem 0",
  },
  innerFlex: {
    // marginLeft: "40px",
    // paddingTop: "20px",
  },

  price: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "1rem 0",
  },
  priceDel: {
    color: "#7f7f7f",
    fontSize: "18px",
  },
  off: {
    color: green[500],
    marginLeft: "15px",
    fontWeight: "500",
  },
  btn: {
    color: "#fff",
    fontSize: "10px",
    marginTop: "10px",
  },
  placeOrder: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    boxShadow: "0px -2px 10px rgba(0,0,0,0.2)",
  },
  placebtn: {
    background: "#FB641B",
    margin: "20px 10px",
    width: 300,
    height: 60,
    color: "#fff",
    fontSize: "20px",
    fontWeigth: "900",
    letterSpacing: "0.4rem",
    boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
    "&:hover": {
      background: "#FB641B",
      boxShadow: "0px 0px 20px #FB641B",
    },
  },
  container: {
    width: "500px",
    padding: "30px 25px",
    height: "75vh",
    "& > *": {
      padding: "10px 0px",
    },
  },
  priceTitle: {
    color: "grey",
    fontSize: "25px",
    borderBottom: "1px solid #7f7f7f ",
    textTransform: "uppercase",
  },
  priceItem: {
    color: "#444",
    fontWeight: "400",
    fontSize: "24px",
    padding: "20px",
    textTransform: "capitalize",
    textAlign: "left",
  },
  greenItem: {
    color: green[600],
    fontWeight: "bold",
    fontSize: "24px",
  },
  flexitem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexitem2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderTop: "1px dashed #7f7f7f",
    borderBottom: "1px dashed #7f7f7f",
    padding: "20px 0",
  },
  tprice: {
    color: "#333",
    fontWeight: "900",
    fontSize: "24px",
  },

  qtybox: {
    display: "flex",
    alignItems: "center",
    gap: 5,
  },

  cartImg: {
    width: "100vw",
    height: "100vh",
    "& >img": {
      width: "100%",
      height: "100vh",
      objectFit: "cover",
    },
  },
  paperBox: {
    height: "300px",
    overflow: "hidden",
    borderBottom: "2px solid green",
    position: "relative",
    background: "#FFFFFF",
  },
});

const Cart = ({ match }) => {
  const classes = useStyles();

  const [open, setopen] = useState(false);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useSelector((state) => state.cartItems);

  const { cartitems } = cartItems;

  const dispatch = useDispatch();
  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };
  useEffect(() => {
    totalAmount();
  }, [cartitems, price]);
  const totalAmount = () => {
    let price = 0,
      discount = 0,
      totalPrice = 0;

    cartitems.map((item) => {
      price += Math.ceil(item.price);
    });

    discount = discount + Math.ceil((price * 40) / 100);
    totalPrice = price - Math.ceil(discount);
    setPrice(price);
    setDiscount(discount);
    setTotalPrice(totalPrice);
  };

  // let discount = (price * 40) / 100;

  // let totalPrice = price - discount;

  console.log("totola amount", price);
  const cartitem = cartitems.map((value) => value);

  const notify = () => toast("THANK YOU YOUR ORDERED PLACED ");

  return (
    <>
      {cartitem.length < 1 ? (
        <Box className={classes.cartImg}>
          <img src={cartimg} alt="" />
        </Box>
      ) : (
        <Box className={classes.root}>
          <Grid container spacing={3}>
            <Grid item lg={8}>
              {cartitems.map((items, index) => {
                return (
                  <Paper className={classes.paperBox}>
                    <Box className={classes.flex}>
                      <Box className={classes.imgBox}>
                        {" "}
                        <img src={items?.images[0]} className={classes.img} />
                      </Box>
                      <Box className={classes.innerFlex}>
                        <Typography className={classes.title}>
                          {items.title}
                        </Typography>

                        <Typography className={classes.price}>
                          {items.price}
                          <span className={classes.priceDel}></span>
                          <span className={classes.off}>40% off</span>{" "}
                        </Typography>

                        <Box className={classes.qtybox}>
                          {/* <Typography className={classes.qtytext}>
                            Qty{" "}
                          </Typography> */}
                          <Typography> old price {price}</Typography>
                          <Box>
                            {/*------------ button group----------------*/}
                            <GroupButtons
                              prevPrice={items.price}
                              price={price}
                              setPrice={setPrice}
                            />
                          </Box>
                        </Box>

                        <Button
                          variant="contained"
                          color="secondary"
                          className={classes.btn}
                          onClick={() => removeItem(items.id)}
                        >
                          Remove{" "}
                        </Button>
                      </Box>
                    </Box>
                  </Paper>
                );
              })}

              <Paper>
                <Box className={classes.placeOrder}>
                  <Button className={classes.placebtn} onClick={notify}>
                    place order
                  </Button>
                </Box>
              </Paper>
            </Grid>

            <Paper className={classes.container}>
              <Typography className={classes.priceTitle}>
                price details
              </Typography>
              <Box className={classes.flexitem}>
                <Typography className={classes.priceItem}>
                  price ( 1 item )
                </Typography>
                <Typography className={classes.tprice}>{price}</Typography>
              </Box>
              <Box className={classes.flexitem}>
                <Typography className={classes.priceItem}>discount</Typography>
                <Typography className={classes.greenItem}>
                  - {discount}
                </Typography>
              </Box>
              <Box className={classes.flexitem}>
                <Typography className={classes.priceItem}>
                  delivery charge
                </Typography>
                <Typography className={classes.greenItem}>Free</Typography>
              </Box>
              <Box className={classes.flexitem2}>
                <Typography className={classes.priceItem}>
                  total amount
                </Typography>
                <Typography className={classes.tprice}>{totalPrice}</Typography>
              </Box>
              <Box className={classes.flexitem}>
                <Typography className={classes.greenItem}>
                  <span>you will save </span> {discount}{" "}
                  <span> on this order</span>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Box>
      )}
      <DiologThank open={open} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Cart;
