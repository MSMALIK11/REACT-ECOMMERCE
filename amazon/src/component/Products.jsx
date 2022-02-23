import React, { useEffect, useState } from "react";
import Product from "./Product";

import { Grid, Box } from "@material-ui/core";

import { getAllProduct } from "./Reduxv1/actons/actions";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

// import {getProducts} from './api/api.js';

const Products = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, newproducts } = productList;

  useEffect(() => {
    dispatch(getAllProduct);
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <Grid
          container
          item
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Product products={newproducts} loading={loading} />
        </Grid>
      )}
    </>

    // <Grid container item style={{ display: "flex", justifyContent: "center" }}>
    //   <Product products={newproducts} loading={loading} />
    // </Grid>
  );
};

export default Products;
