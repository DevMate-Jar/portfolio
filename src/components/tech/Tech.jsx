import { Box } from "@mui/material";
import { IoLogoReact } from "react-icons/io5";
import {
  FaGitAlt,
  FaGithub,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";
import { SiJavascript, SiMysql } from "react-icons/si";

export const Tech = () => {
  return (
    <Box
      sx={{
        gridArea: "tech",
        bgcolor: "#161c908a",
        borderRadius: 3,
        gap: { xs: 1, lg: 2 },
        fontSize: {
          xs: "2.6rem",
          sm: "2.6rem",
          md: "2.8rem",
          lg: "3.3rem",
          xl: "3.7rem",
        },
        padding: {
          xs: 1,
          sm: 2,
        },
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <FaHtml5 color="#e34c26" />
      <FaCss3Alt color="#264de4" />
      <FaPython color="#306998" />
      <SiJavascript color="yellow" />
      <FaJava color="#1e88e5" />
      <IoLogoReact color="rgb(13,202,240)" />
      <SiMysql color="white" />
      <FaGitAlt color="#dc3545" />
      <FaGithub color="white" />
    </Box>
  );
};
