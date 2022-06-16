import { Button, Typography } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { Box } from "@mui/system";
import { newsletter } from "../../data";
const Newsletter = () => {
  return (
    <>
      <div
        style={{
          height: "400px",
          width: "96%",
          margin: "2%",
          boxSizing: "content-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          backgroundSize: "cover",
          placeItems: "center",
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/blog/Rectangle.png"
          })`,
        }}
      >
        <Typography
          sx={{
            color: "#2F1AC4",
            fontFamily: "Josefin Sans",
            fontSize: "25px",
          }}
        >
          Get Latest Updates By Subscribe Our Newslater
        </Typography>

        <Button sx={{ bgcolor: "deeppink", color: "white", m: 2 }}>
          Add to cart
        </Button>
      </div>
    </>
  );
};

export default Newsletter;
