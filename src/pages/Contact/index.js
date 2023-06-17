import React, { useEffect, useState } from "react";
import Layout from "../../hoc/LandingPage_Layout";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Close, Send } from "@mui/icons-material";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import "./ContactPage.css";

const TextInput = ({ label, name, value, handler }) => {
  return (
    <Box sx={{ width: "38.5%", minWidth: 250 }}>
      <TextField
        label={label}
        name={name}
        value={value}
        fullWidth
        onChange={handler}
      />
    </Box>
  );
};

const Contact = () => {
  const navigate = useNavigate();
  const [contactInfo, setContactInfo] = useState({
    name: "",
    company: "",
    email: "",
    mobNo: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [greetModal, setGreetModal] = useState(false);
  const theme = useTheme();
  const [disable, setDisable] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const Header = ({ title, subtitle }) => {
    return (
      <div style={{ minWidth: 250 }}>
        <Typography variant="h6" color="primary">
          {title}
        </Typography>
        {subtitle && <Typography variant="p">{subtitle}</Typography>}
      </div>
    );
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });

    if (name === "email" && value.includes("@") && value.indexOf("@") > 1) {
      setIsEmailValid(true);
    }
  };
  const closeHandler = () => {
    setGreetModal(false);
  };
  const sendMail = async () => {
    setLoading(true);
    // Your EmailJS service configuration
    const serviceID = process.env.REACT_APP_SERVICEID;
    const templateID = process.env.REACT_APP_TEMPLATEID;
    const userID = process.env.REACT_APP_USERID;
    console.log(" varibles ", serviceID, templateID, userID);

    // Set the email parameters
    const templateParams = {
      from_name: contactInfo.name,
      from_email: contactInfo.email,
      company_name: contactInfo.company,
      message: contactInfo.message,
    };
    // Send the email using EmailJS
    const response = await emailjs.send(
      serviceID,
      templateID,
      templateParams,
      userID
    );
    if (response.status) {
      setGreetModal(true);
      setLoading(false);
    } else {
      setLoading(false);
    }
    console.error("Error sending email:");
  };

  const GreetingsModal = () => {
    return (
      <Box className="greet-modal-main">
        <Box className="greet-modal-sub">
          <Button sx={{ marginLeft: "86%" }} onClick={closeHandler}>
            <Close />
          </Button>
          <Typography variant="p">Thanks for reaching out!</Typography>
          <Typography variant="p">
            Your Message just showed up in my inbox. Talk to you soon!
          </Typography>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Box>
    );
  };

  const handleMail = () => {
    if (
      contactInfo.name.length >= 2 &&
      isEmailValid &&
      contactInfo.message.length > 10
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  useEffect(() => {
    handleMail();
  }, [contactInfo]);

  return (
    <Layout>
      {greetModal && <GreetingsModal />}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          flex: 10,
          overflowY: "auto",
        }}
      >
        <Box className="child1-large">
          <Box
            sx={{
              width: "100%",
              minWidth: 450,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3" sx={{ width: "70%" }}>
              Hi there! I'm thrilled that you've stopped by. Let's work together
              to create something truly great.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <Header
              title="NEW BUSINESS"
              subtitle="chandrasekhar8120@gmail.com"
            />
            <Header
              title="GENERAL INQUIRIES"
              subtitle="chandrasekhar.info@gmail.com"
            />
          </Box>
        </Box>
        <Box className="child2-large">
          <Box className="contact-form">
            <Typography
              variant="h3"
              sx={{ width: "80%", textAlign: "center", color: "#3498db" }}
            >
              Contact Us
            </Typography>
            <TextInput
              label="Name"
              name="name"
              value={contactInfo.name}
              handler={changeHandler}
            />
            <TextInput
              label="Company ( optional )"
              name="company"
              value={contactInfo.company}
              handler={changeHandler}
            />
            <TextInput
              label="Email"
              name="email"
              value={contactInfo.email}
              handler={changeHandler}
            />
            <TextInput
              label="MobileNo ( optional )"
              name="mobNo"
              value={contactInfo.mobNo}
              handler={changeHandler}
            />
            <TextField
              id="my-textarea"
              label="Message"
              multiline
              rows={4}
              value={contactInfo.message}
              sx={{ width: "80%", minWidth: 250 }}
              onChange={(e) => {
                setContactInfo({ ...contactInfo, message: e.target.value });
              }}
            />
            <LoadingButton
              variant="contained"
              className={disable ? "disable-button" : "loading-button"}
              loading={loading}
              loadingPosition="start"
              startIcon={<Send />}
              onClick={sendMail}
              disabled={disable}
            >
              Send Away
            </LoadingButton>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
