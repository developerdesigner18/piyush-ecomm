import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { discountsofa } from "../../data";
import CircleIcon from "@mui/icons-material/Circle";

const DiscountItem = () => {
  const group = ["Wood Chair", "Plastic Chair", "Sofa"];
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          color: "#1A0B5B",
          fontFamily: "Josefin Sans",
          fontSize: "42px",
          margin: "10px",
        }}
      >
        Discount Item
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {group.map((group, index) => (
          <div
            key={index}
            style={{
              fontFamily: "Lato",
              fontWeight: 400,
              fontSize: 18,
              color: "#151875",
              margin: "20px",
            }}
          >
            {group}
          </div>
        ))}
      </div>

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
        <div style={{ textAlign: "justify", justifyContent: "space-evenly" }}>
          <Typography
            sx={{
              color: "#2F1AC4",
              fontFamily: "Josefin Sans",
              fontSize: "25px",
              m: "20px",
            }}
          >
            20% discount on all Products
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
        <div>
          <img
            className="img"
            src="/blog/tortuga-01-b 1.png"
            height="350px"
            margin="auto"
          />
        </div>
      </Box>
    </>
  );
};
export default DiscountItem;
