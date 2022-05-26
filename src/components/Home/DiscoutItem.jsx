import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { discountsofa } from "../../data";

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
        style={{
          background: "#F1F0FF",
          height: "400px",
          margin: "30px",
          display: "grid",
          placeItems: "center",
        }}
      >
        <img src={discountsofa.img} height="350px" width="auto" />
      </Box>
    </>
  );
};
export default DiscountItem;
