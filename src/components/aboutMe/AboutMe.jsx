import { Box } from "@mui/material";

export const AboutMe = ({ language }) => {
  return (
    <Box
      component="div"
      sx={{
        gridArea: "aboutMe",
        bgcolor: "#161c908a",
        display: "flex",
        alignItems: "end",
        textAlign: { sm: "center", md: "start" },
        borderRadius: 3,
        padding: 2,
      }}
    >
      <Box component="div" sx={{ color: "white" }}>
        <Box
          component={"h1"}
          sx={{
            textAlign: { xs: "center", md: "start" },
            fontSize: {
              xs: "1.5rem",
              sm: "2.5rem",
              md: "3rem",
              lg: "3.6rem",
            },
            marginBottom: { xs: 2.6, sm: 2, md: 0 },
          }}
        >
          {language === "ES" ? "Hola! Soy Mateo " : "Hello! I'm Mateo "}
        </Box>
        <Box
          component={"p"}
          sx={{
            fontSize: {
              xs: "0.7rem",
              sm: "1.2rem",
              md: "1.6rem",
              lg: "1.8rem",
            },
            marginRight: {
              xs: 0,
              sm: "1rem",
              md: "13rem",
              lg: "18rem",
              xl: "25.5rem",
            },
            marginTop: 1,
          }}
        >
          {language === "ES"
            ? "Desarrollador Front-End con gran pasión por JavaScript. Disfruto aprender y explorar nuevas tecnologías, manteniéndome en constante crecimiento profesional. Me caracterizo por mi atención al detalle y por buscar siempre entregar soluciones de alta calidad, combinando dedicación y compromiso en cada proyecto."
            : "Front-End Developer with a strong passion for JavaScript. I love exploring and mastering new technologies, and I have a keen eye for design and user experience. I’m dedicated to delivering high-quality, polished results and always give my best in every project I work on."}
        </Box>
      </Box>
    </Box>
  );
};
