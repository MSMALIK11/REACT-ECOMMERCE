import React, { useState } from "react";
import logo from "../images/logo.png";
import {
  makeStyles,
  Box,
  Typography,
  Container,
  AppBar,
  Toolbar,
  Button,
} from "@material-ui/core";
import { Menu, MenuItem } from "@material-ui/core";
import SearchBar from "./appbarComponent/SearchBar";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Login from "./appbarComponent/Login";
import PersonPinIcon from "@mui/icons-material/PersonPin";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: "75px",
  },
  loginbtn: {
    backgroundColor: "#fff",
    padding: "5px 30px",
    textTransform: "capitalize",
    fontSize: "20px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "none",
    },
  },
  morebtn: {
    color: "#fff",
    fontSize: "20px",
    textTransform: "capitalize",
    paddingLeft: "20px",
  },
  cart: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& > *": {
      paddingLeft: "10px",
    },
  },

  typo: {
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
}));

const Appbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { cartitems } = useSelector((state) => state.cartItems);
  console.log("store data is", cartitems.length);
  const itemLength = cartitems.length;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //   const [dialog, setDialog] = useState(false);

  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar style={{ backgroundColor: "#2874f0" }}>
          <Container>
            <Box className={classes.mainBox}>
              <Box>
                <img src={logo} alt="logo-flipkart" className={classes.logo} />
              </Box>
              <Box>
                {" "}
                <SearchBar />{" "}
              </Box>
              <Box className={classes.mainBox}>
                {/* <Typography className={classes.typo}>{data}</Typography> <Login /> */}
                <Login />
                <Box>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    Profile
                  </Button>
                  <PersonPinIcon />
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link to="/profile">My Profile</Link>{" "}
                    </MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </Box>
                <Box className={classes.cart}>
                  <Link to="/cart/item">
                    <Badge
                      badgeContent={`${itemLength > 1 ? itemLength : 0}`}
                      color="primary"
                    >
                      <ShoppingCartIcon />
                    </Badge>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Appbar;

// #2874f0 FFE500
