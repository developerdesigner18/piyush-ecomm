import {
  Box,
  Button,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const ContactUs = () => {
  return (
    <>
      {" "}
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
          {" "}
          Contact Us
        </Typography>
      </Box>
      <div
        style={{
          display: "flex",
          width: "100%",
          marginLeft: "160px",
        }}
      >
        <div style={{ width: "550px", marginRight: "20px" }}>
          <Typography
            sx={{
              color: "#101750",
              fontSize: "36PX",
              textAlign: "left",
            }}
          >
            Information About Us
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
          <div
            style={{
              justifyContent: "space-evenly",
              width: "103px",
              height: "25px",
              marginLeft: 0,
              alignItems: "start",
            }}
          >
            <CircleIcon sx={{ color: "#37DAF3" }} />
            <CircleIcon sx={{ color: "#5625DF" }} />
            <CircleIcon sx={{ color: "#FF27B7" }} />
          </div>
        </div>

        <div>
          <Typography
            sx={{
              ml: "160px",
              color: "#101750",
              fontSize: "36PX",
              textAlign: "left",
            }}
          >
            Contact Way
          </Typography>
          <div>
            <div
              style={{
                display: "flex",
                marginRight: "10px",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CircleIcon
                  sx={{ color: "#37DAF3", width: "45px", height: "45px" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography>Tel:0156332556</Typography>
                  <Typography>Email:admin@.com</Typography>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <CircleIcon
                  sx={{ color: "#5625DF", width: "45px", height: "45px" }}
                />
                <Typography>Support from 24 hr</Typography>
              </div>
            </div>

            <div
              style={{
                display: "flex",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CircleIcon
                  sx={{ color: "#37DAF3", width: "45px", height: "45px" }}
                />
                <Typography>20 market st London</Typography>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CircleIcon
                  sx={{ color: "#5625DF", width: "45px", height: "45px" }}
                />
                <Typography>Free Standard shipping on all order</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "50px",
          justifyContent: "center",
          marginBottom: "150px",
        }}
      >
        <div style={{ width: "534px", marginLeft: 0 }}>
          <Typography
            sx={{
              color: "#101750",
              fontSize: "36PX",
              textAlign: "left",
            }}
          >
            Get In Touch
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
          <div style={{ marginTop: "50px" }}>
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
        <div>
          <img src="/blogpage/Group 124.png" alt="logo" height="530px" />
        </div>
      </div>
    </>
  );
};
export default ContactUs;
