import { Box } from "@mui/system";
import { sofa } from "../../data";
const Sofa = () => {
  return (
    <>
      <Box
        style={{
          background: "#F1F0FF",
          height: "400px",
          margin: "30px",
          display: "grid",
          placeItems: "center",
        }}
      >
        <img src={sofa.img} height="350px" width="auto" />
      </Box>
    </>
  );
};

export default Sofa;
