import { Box } from "@mui/system";
import { newsletter } from "../../data";
const Newsletter = () => {
  return (
    <>
      <Box
        style={{
          height: "400px",
          margin: "30px",
          display: "grid",
          placeItems: "center",
        }}
      >
        <img src={newsletter.img} height="350px" width="auto" />
      </Box>
      <Box
        style={{
          margin: "30px",
          display: "grid",
          placeItems: "center",
        }}
      >
        <img src={newsletter.img2} height="50px" width="auto" />
      </Box>
    </>
  );
};

export default Newsletter;
