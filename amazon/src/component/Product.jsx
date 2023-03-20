import React, { useEffect } from "react";
import {
  makeStyles,
  Box,
  Typography,
  Grid,
  Divider,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch } from "react-redux";
import { addToCart } from "./Reduxv1/actons/cartAction";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  imgBox: {
    height: "300px",
  },
  img: {
    width: "100%",
    height: "300px",
    objectFit: "contain",
  },
  box: {
    display: "flex",
    maxWidth: 400,
    position: "relative",
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
    transition: "box-shadow .2s ease-in-out",
    padding: "30px 5px",
    "&:hover": {
      boxShadow: "0px 0px 5px rgba(0,0,0,0.15)",
    },
  },
  info: {
    padding: "10px 5px",
    textAlign: "center",
  },
  heading: {
    fontSize: "25px",
  },
  cat: {
    marginTop: "10px",
    color: "#7f7f7f",
    fontSize: "18px",
    textTransform: "capitalize",
  },
  pos: {
    position: "relative",
  },
  absol: {
    textAlign: "center",
    position: "absolute",
    fontSize: "25px",
    top: 10,
    right: 0,
    color: "#7f7f7f",

    padding: "10px 20px",

    // transform:"rotate(45deg)"
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
  price: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0px",

    "& > *": {
      textAlign: "center",

      fontWeight: "bold",
      fontSize: "25px",
      color: "#111",
    },
  },
}));

const Product = ({ products, loading }) => {
  console.log("Product", products);
  const styles = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const add_to_cart = (id) => {
    console.log("id", id);
    dispatch(addToCart(id));
    history.push("/");
  };
  console.log('produt',products)

  return (
    <>
      {products.map((data, index) => {
        return (
          <Grid item sm={12} md={4} lg={3} key={index} className={styles.box}>
            <Box className={styles.imgBox}>
              <img src={data.images[0]} alt={data.title} className={styles.img} />
            </Box>

            {/* <Box className={styles.absol}>
              <FavoriteIcon />
            </Box> */}

            <Box className={styles.info}>
              <Link to={`/product/${data.id}`} className={styles.link}>
                <Typography
                  component="h5"
                  variant="h5"
                  className={styles.heading}
                >
                  {data.title.slice(0, 20)}...
                </Typography>
              </Link>

              <Typography className={styles.cat}>{data.category}</Typography>
              <Box className={styles.price}>
                <AttachMoneyIcon size="large" />
                <Typography>{Math.ceil(data.price)}</Typography>
              </Box>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => add_to_cart(data.id)}
              >
                Add to cart
              </Button>
            </Box>
          </Grid>
        );
      })}
    </>
  );
};

export default Product;
