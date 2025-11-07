import { Box } from "@mui/material";
import { IoLogoReact } from "react-icons/io5";
import { FaGitAlt, FaGithub, FaJava } from "react-icons/fa";
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
          xs: "1.6rem",
          sm: "2rem",
          md: "2.32rem",
          lg: "2.7rem",
          xl: "2.9rem",
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
      <SiJavascript color="yellow" />
      <FaJava color="#1e88e5" />
      <IoLogoReact color="rgb(13,202,240)" />
      <SiMysql color="white" />
      <FaGitAlt color="#dc3545" />
      <FaGithub color="white" />
    </Box>
  );
};
