import { TextareaAutosize, TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";

const Faq = () => {
  return (
    <>
      <Box
        sx={{
          height: "130px",
          width: "100%",
          mb: "50px",
          justifyContent: "center",
          bgcolor: "#F6F5FF",
        }}
      >
        <Typography
          sx={{
            ml: "160px",
            color: "#101750",
            fontSize: "36PX",
            textAlign: "left",
          }}
        >
          FAQ
        </Typography>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "160px",
          marginBottom: "150px",
        }}
      >
        <div style={{ width: "750px", justifyContent: "center" }}>
          {" "}
          <Typography
            sx={{
              color: "#101750",
              fontSize: "36PX",
              textAlign: "left",
              mb: "50px",
            }}
          >
            General Information
          </Typography>
          <Typography sx={{ textAlign: "left" }}>
            Eu dictumst cum at sed euismood condimentum?
          </Typography>
          <Typography
            sx={{
              color: "#8A8FB9",
              fontFamily: "Lato",
              fontWeight: "600px",
              fontSize: "16px",
              textAlign: "left",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </Typography>
          <Typography sx={{ textAlign: "left" }}>
            Eu dictumst cum at sed euismood condimentum?
          </Typography>
          <Typography
            sx={{
              color: "#8A8FB9",
              fontFamily: "Lato",
              fontWeight: "600px",
              fontSize: "16px",
              textAlign: "left",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </Typography>
          <Typography sx={{ textAlign: "left" }}>
            Eu dictumst cum at sed euismood condimentum?
          </Typography>
          <Typography
            sx={{
              color: "#8A8FB9",
              fontFamily: "Lato",
              fontWeight: "600px",
              fontSize: "16px",
              textAlign: "left",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </Typography>
          <Typography sx={{ textAlign: "left" }}>
            Eu dictumst cum at sed euismood condimentum?
          </Typography>
          <Typography
            sx={{
              color: "#8A8FB9",
              fontFamily: "Lato",
              fontWeight: "600px",
              fontSize: "16px",
              textAlign: "left",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </Typography>
        </div>
        <div>
          <Typography
            sx={{
              color: "#101750",
              fontSize: "36PX",
              textAlign: "left",
            }}
          >
            Ask a Question
          </Typography>
          <div
            style={{ marginTop: "50px", width: "534px", marginRight: "100px" }}
          >
            <TextField
              placeholder="Your Name*"
              sx={{ mr: "10px", mb: "20px" }}
            />
            <TextField placeholder="Your Email*" />
            <TextField
              placeholder="Subject*"
              sx={{ width: "465px", mb: "20px" }}
            />
            <TextareaAutosize
              minRows={10}
              style={{ width: "465px" }}
              placeholder="Type your Message"
            />
            <Button
              sx={{
                width: "157px",
                height: "44px",
                bgcolor: "deeppink",
                color: "white",
                alignItems: "flex-start",
                margin: 0,
              }}
            >
              Send Mail
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
