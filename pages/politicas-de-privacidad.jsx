import { Box, Container, Grid, Typography } from "@mui/material";

export default function PolicyOfPrivacy() {
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
          {policy.title}
        </Typography>
      </Box>
      {policy.items.map((item) => {
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
        {policy.date}
      </Typography>
    </Container>
  );
}

const policy = {
  title: "Política de Privacidad",
  items: [
    {
      title: "Recopilación de información personal",
      paragraph:
        "Al utilizar el formulario de contacto en este sitio web, usted acepta proporcionar su nombre, dirección de correo electrónico, número de teléfono y cualquier otra información solicitada. Esta información se utilizará exclusivamente para responder a sus consultas y proporcionarle información sobre nuestros servicios.",
    },
    {
      title: "Uso de la información",
      paragraph:
        "La información personal que proporciona será utilizada únicamente para los fines descritos en esta Política de Privacidad y en los Términos y Condiciones de Uso. No compartiremos su información personal con terceros sin su consentimiento, excepto cuando sea necesario para cumplir con la ley, proteger nuestros derechos o cumplir con los requisitos legales.",
    },
    {
      title: "Seguridad de la información",
      paragraph:
        "Nos esforzamos por proteger la información personal que nos proporciona, utilizando medidas de seguridad adecuadas para prevenir el acceso no autorizado, divulgación, modificación o destrucción de dicha información. Sin embargo, no podemos garantizar la seguridad absoluta de su información personal.",
    },
    {
      title: "Acceso y rectificación de la información",
      paragraph:
        "Usted tiene derecho a acceder, rectificar, actualizar o eliminar su información personal almacenada en nuestros sistemas. Para ejercer estos derechos, por favor póngase en contacto con nosotros a través de la dirección de correo electrónico o número de teléfono proporcionados en este sitio web.",
    },
    {
      title: "Cambios en la política de privacidad",
      paragraph:
        "LATAMVISAPRO se reserva el derecho de modificar esta Política de Privacidad en cualquier momento y sin previo aviso. Al utilizar este sitio web, usted acepta cumplir con la política de privacidad vigente en ese momento.",
    },
    {
      title: "Uso de cookies",
      paragraph:
        "Este sitio web puede utilizar cookies y otras tecnologías de seguimiento para mejorar su experiencia de navegación, analizar el uso del sitio web y brindar funcionalidades adicionales. Al utilizar este sitio web, usted acepta el uso de cookies y otras tecnologías de seguimiento, de acuerdo con nuestra Política de Cookies, si corresponde.",
    },
    {
      title: "Enlaces a sitios web de terceros",
      paragraph:
        "Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad o el contenido de estos sitios web de terceros. Si visita estos sitios web, le recomendamos que revise sus políticas de privacidad y términos y condiciones antes de proporcionar cualquier información personal.",
    },
    {
      title: "Contacto",
      paragraph:
        "Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad o sobre el tratamiento de su información personal, no dude en ponerse en contacto con nosotros utilizando la información de contacto proporcionada en este sitio web.",
    },
  ],
  date: "Fecha de la última actualización: 28/05/2023",
};
