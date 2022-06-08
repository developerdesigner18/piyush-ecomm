import { Button, Typography } from "@mui/material";
import { bgcolor, Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import { ordercomplete } from "../../data";
import { newsletter } from "../../data";
import { useNavigate } from "react-router-dom";

const OrderComplete = () => {
  const navigate = useNavigate();
  const shopingHandler = () => {
    navigate("/product");
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img
          src={ordercomplete.img2}
          width="94px"
          height="94px"
          style={{ marginLeft: "200px", marginTop: "50px" }}
        />
        <Box sx={{ width: "625px", height: "326px", margin: "auto" }}>
          <CheckIcon fontSize="large" sx={{ color: "#FF1788" }} />
          <Typography
            sx={{
              fontFamily: "Josefin Sans",
              fontSize: "36px",
              color: "#101750",
            }}
          >
            Your Order Is Completed!
          </Typography>
          <Typography sx={{ color: "#8D92A7", fontSize: "16px" }}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of
          </Typography>
          <Button
            variant="contained"
            onClick={shopingHandler}
            sx={{
              width: "208px",
              height: "59px",
              bgcolor: "#FF1788",
              color: "white",
            }}
          >
            Continue Shopping
          </Button>
        </Box>
        <img
          src={ordercomplete.img1}
          width="70px"
          height="70px"
          marginTop="0px"
          style={{ marginLeft: "950px" }}
        />
        <Box
          style={{
            margin: "30px",
            display: "grid",
            placeItems: "center",
            marginTop: "100px",
            marginBottom: "100px",
          }}
        >
          <img src={newsletter.img2} height="50px" width="auto" />
        </Box>
      </div>
    </>
  );
};
export default OrderComplete;
