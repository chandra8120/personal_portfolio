import React from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Layout from "../../hoc/LandingPage_Layout";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaMobile } from "react-icons/fa";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          width: "99.8%",
          height:"100%",
          display: "flex",
          flexWrap:"wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            width: "80%",
          }}
        >
          <Typography variant="h3">Iam MadanaGopal,</Typography>
          <Typography variant="h4">Based in India.</Typography>

          <Typography variant="h6" color={"orange"}>
            Work Experience :{" "}
          </Typography>
          <List>
            <ListItem>
              <ListItemText>2023-now : Full-Stack Developer</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>2022-2023 : Front-End Developer</ListItemText>
            </ListItem>
          </List>
          <Typography variant="h6" color={"orange"}>
            Education :{" "}
          </Typography>
          <List>
            <ListItem>
              <ListItemText>
                2019-2021 : M.Sc ( Computer Science ) at RayalaSeema University
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                2015-2019 : B.Sc ( Computer Science ){" "}
              </ListItemText>
            </ListItem>
          </List>
          <Typography variant="h6" color={"orange"}>
            Skills :{" "}
          </Typography>
          <List>
            <ListItem>
              <ListItemText>
                HTML, CSS & JavaScript, React js & React-Native
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>C, Java, Node.js & Firebase</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Oracle, Excellent in Firestore, Cloud Functions
              </ListItemText>
            </ListItem>
          </List>
          <Typography variant="h6" color={"orange"}>
            Certifications :{" "}
          </Typography>
          <List>
            <ListItem>
              <ListItemText>GCP - Associate Cloud Engineer</ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            border: 2,
            width: "65%",
            borderColor: "#3498db",
            minWidth:350,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            backgroundColor: "black",
            gap: 4,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            color: "white",
            padding:2
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              {" "}
              <FcGoogle /> <>madangopalyadav6@gmail.com</>
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <FaGithub /> madangopalyadav6@github.com
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <FaMobile />
              Mobile No : 8639996897
            </Typography>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
