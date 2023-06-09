import { Box, Container, Grid, Typography } from "@mui/material";

export default function TermsOfUse() {
  return (
    <Container
      component="section"
      sx={{
        padding: "160px 4% 0",
        maxWidth: "1280px",
        display: "grid",
        gap: "30px",
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(180deg, #42424A 0%, #191919 100%)",
          borderRadius: "10px",
          padding: "30px 20px",
          marginBottom: "15px",
        }}
      >
        <Typography variant="h5" component="h2" color="#fff">
          {terms.title}
        </Typography>
      </Box>
      {terms.items.map((item) => {
        return (
          <Grid sx={{ display: "grid", gap: "10px", padding: "0 20px" }}>
            <Typography
              variant="h6"
              component="h3"
              color="primary"
              fontWeight="bold"
            >
              {item.title}
            </Typography>
            <Typography component="p" color="secondary">
              {item.paragraph}
            </Typography>
          </Grid>
        );
      })}
      <Typography component="p" color="secondary" padding="0 20px">
        {terms.date}
      </Typography>
    </Container>
  );
}

const terms = {
  title: "Términos y Condiciones de Uso",
  items: [
    {
      title: "Introducción",
      paragraph:
        "Al utilizar esta landing page, usted acepta cumplir con estos Términos y Condiciones de Uso. Si no está de acuerdo con alguno de estos términos, no utilice este sitio web.",
    },
    {
      title: "Derechos de propiedad intelectual",
      paragraph:
        "Todos los derechos de propiedad intelectual relacionados con el contenido, diseño, logotipos, imágenes y demás elementos de este sitio web son propiedad de LATAMVISAPRO o sus licenciantes. Queda prohibida la reproducción, distribución, comunicación pública o transformación de estos elementos sin la autorización previa y por escrito de [nombre de la empresa] o sus licenciantes.",
    },
    {
      title: "Uso del formulario de contacto",
      paragraph:
        "Al proporcionar su información personal a través del formulario de contacto, usted acepta que LATAMVISAPRO pueda utilizar esa información para contactarlo con respecto a sus servicios. Al proporcionar su información, usted garantiza que es veraz, exacta y actualizada.",
    },
    {
      title: "Limitación de responsabilidad",
      paragraph:
        "LATAMVISAPRO no será responsable de ningún daño o pérdida que pueda resultar del uso de este sitio web o la información contenida en él. LATAMVISAPRO no garantiza que el sitio web esté libre de errores, virus u otros elementos dañinos.",
    },
    {
      title: "Modificaciones de los términos y condiciones",
      paragraph:
        "LATAMVISAPRO se reserva el derecho de modificar estos Términos y Condiciones de Uso en cualquier momento y sin previo aviso. Al utilizar este sitio web, usted acepta cumplir con los términos y condiciones vigentes en ese momento.",
    },
  ],
  date: "Fecha de la última actualización: 10/06/2023",
};
