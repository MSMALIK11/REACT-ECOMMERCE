import React, { useState } from "react";
import Button from "@mui/material/Button";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const GroupButtons = ({ prevPrice, price, setPrice }) => {
  let newprice = Number(price);
  let newPrevPrice = Math.ceil(prevPrice);
  const [qty, setQty] = useState(1);

  const handleIncrement = () => {
    setPrice(newprice + newPrevPrice);
    setQty(qty + 1);
  };
  return (
    <div>
      <IconButton disabled={qty === 1}>
        <RemoveCircleIcon
          fontSize="lg"
          color={qty === 1 ? "error" : "secondary"}
          onClick={() => setQty(qty - 1)}
        />
      </IconButton>

      <Button>{qty}</Button>

      <IconButton>
        <AddCircleIcon
          fontSize="lg"
          color="secondary"
          variant="contained"
          onClick={handleIncrement}
        />
      </IconButton>
    </div>
  );
};

export default GroupButtons;
