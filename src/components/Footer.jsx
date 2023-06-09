import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Container
      component="footer"
      sx={{ display: "grid", gap: "20px", padding: "50px 0" }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        {footerLinks.map(({ key, label, route }) => {
          return (
            <Link key={key} href={route} scroll={!route.startsWith("/#")}>
              <Button
                component="button"
                variant="text"
                sx={{
                  textTransform: "initial",
                  padding: "0 15px",
                  minWidth: "initial",
                  fontSize: "16px",
                }}
              >
                {label}
              </Button>
            </Link>
          );
        })}
      </Box>

      <Grid
        container
        sx={{
          display: "grid",
          gridAutoColumns: "max-content",
          gridAutoFlow: "column",
          placeContent: "center",
          gap: "20px",
          placeItems: "center",
        }}
      >
        {footerMedia.map(({ key, route, Icon }) => {
          return (
            <Grid key={key}>
              <Link href={route} style={{ display: "flex" }}>
                <Icon color="primary" />
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <Typography variant="body2" textAlign="center" color="primary">
        Copyright © {new Date().getFullYear()} LATAMVISAPRO Todos los derechos
        reservados
      </Typography>
    </Container>
  );
}

const footerMedia = [
  {
    key: "facebook",
    route: "/",
    Icon: Facebook,
  },
  {
    key: "instagram",
    route: "/",
    Icon: Instagram,
  },
  {
    key: "whatsapp",
    route: "/",
    Icon: WhatsApp,
  },
];

const footerLinks = [
  {
    key: "inicio",
    label: "Inicio",
    route: "/",
  },
  {
    key: "visas",
    label: "Visas",
    route: "/#visas",
  },
  {
    key: "nosotros",
    label: "Nosotros",
    route: "/#nosotros",
  },
  {
    key: "servicios",
    label: "Servicios",
    route: "/#servicios",
  },
  {
    key: "faq",
    label: "FAQ",
    route: "/#faq",
  },
  {
    key: "contacto",
    label: "Contácto",
    route: "/#contacto",
  },
  {
    key: "terminos",
    label: "Términos y condiciones",
    route: "/terminos-y-condiciones",
  },
  {
    key: "politicas",
    label: "Políticas de privacidad",
    route: "/politicas-de-privacidad",
  },
];
