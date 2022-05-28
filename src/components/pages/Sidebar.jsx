import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const Sidebar = () => {
  const brand = [
    "coasterfurniture",
    "Fusion Dot High Fashion",
    "Unique Furniture Restor",
    "Dream Furniture Flipping",
    "Young Repurposed",
    "Green DIY furniture",
  ];
  const discount = ["20% Cashback", "5% Cashback", "25% Discount Offer"];
  const categories = [
    "Prestashop",
    "Magneto",
    "Bigcommerce",
    "oscommerce",
    "3dCardt",
    "Bags",
    "Accessories",
    "jwellery",
    "watches",
  ];
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          color: "#1A0B5B",
          fontFamily: "Josefin Sans",
          fontSize: "22px",
          display: "flex",
          m: 2,
        }}
      >
        Product Brand
      </Typography>
      {brand.map((brand, index) => {
        return (
          <>
            <div style={{ display: "flex" }}>
              <Checkbox sx={{ width: "16px", height: "16px", m: 1 }} />
              <Typography
                sx={{
                  fontWeight: "400px",
                  fontFamily: "Lato",
                  fontSize: "16px",
                  color: "#7E81A2",
                  justifyContent: "center",
                }}
              >
                {brand}
              </Typography>
            </div>
          </>
        );
      })}
      <Typography
        variant="h3"
        sx={{
          color: "#1A0B5B",
          fontFamily: "Josefin Sans",
          fontSize: "22px",
          display: "flex",
          m: 2,
        }}
      >
        Discount Offer
      </Typography>
      {discount.map((discount) => {
        return (
          <>
            <div style={{ display: "flex" }}>
              <Checkbox sx={{ width: "16px", height: "16px", m: 1 }} />
              <Typography
                sx={{
                  fontWeight: "400px",
                  fontFamily: "Lato",
                  fontSize: "16px",
                  color: "#7E81A2",
                  justifyContent: "center",
                }}
              >
                {discount}
              </Typography>
            </div>
          </>
        );
      })}
      <Typography
        variant="h3"
        sx={{
          color: "#1A0B5B",
          fontFamily: "Josefin Sans",
          fontSize: "22px",
          display: "flex",
          m: 2,
        }}
      >
        Categories
      </Typography>
      {categories.map((categories) => {
        return (
          <>
            <div style={{ display: "flex" }}>
              <Checkbox sx={{ width: "16px", height: "16px", m: 1 }} />
              <Typography
                sx={{
                  fontWeight: "400px",
                  fontFamily: "Lato",
                  fontSize: "16px",
                  color: "#7E81A2",
                  justifyContent: "center",
                }}
              >
                {categories}
              </Typography>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Sidebar;
