import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { sofa } from "../../data";
import style from "./style.css";
import CircleIcon from "@mui/icons-material/Circle";
const Sofa = () => {
  return (
    <>
      <Box
        sx={{
          background: "#F1F0FF",
          width: "96%",
          m: "2%",
          height: "450px",
          background: "#F2F0FF",
          display: "flex",
          justifyContent: { lg: "space-evenly" },
        }}
      >
        <div>
          <img
            className="img"
            src="/blog/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png"
            height="350px"
            margin="auto"
          />
        </div>
        <div style={{ textAlign: "justify", justifyContent: "space-evenly" }}>
          <Typography
            sx={{
              color: "#2F1AC4",
              fontFamily: "Josefin Sans",
              fontSize: "25px",
              m: "20px",
            }}
          >
            Unique Features of Latest Trending Products
          </Typography>
          <Typography sx={{ m: 2 }}>
            <CircleIcon
              sx={{ color: "#5625DF", width: "10px", height: "10px" }}
            />
            All frames constructed with hardwood solids and laminates
          </Typography>
          <Typography sx={{ m: 2 }}>
            {" "}
            <CircleIcon
              sx={{ color: "#5625DF", width: "10px", height: "10px" }}
            />
            Reinforced with double wood dowels, glue, screw - nails corner
            blocks and machine nails
          </Typography>
          <Typography sx={{ m: 2 }}>
            <CircleIcon
              sx={{ color: "#5625DF", width: "10px", height: "10px" }}
            />
            Arms, backs and seats are structurally reinforced
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button sx={{ bgcolor: "deeppink", color: "white", m: 2 }}>
              Add to cart
            </Button>
            <Typography>B&B Italian Sofa $32</Typography>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Sofa;
