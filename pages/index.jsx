import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  WhatsApp,
  EmojiEventsOutlined,
  HandshakeOutlined,
  PlagiarismOutlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import VisaCard from "../src/components/VisaCard";
import CompanyValue from "../src/components/CompanyValue";

export default function Home() {
  return (
    <>
      <Container
        component="section"
        sx={{
          position: "relative",
          maxWidth: { xs: "100%", xl: "100%" },
          minHeight: "500px",
          display: "grid",
        }}
      >
        <Image
          src="/images/hero.png"
          alt="Hero image"
          width={1280}
          height={1280}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />
        <Grid
          sx={{
            display: "grid",
            gridAutoRows: "max-content",
            placeContent: "center",
            gap: "40px",
            zIndex: "40",
          }}
        >
          <Grid
            display="grid"
            justifyContent="center"
            gap="15px"
            textAlign="center"
            marginTop="60px"
            maxWidth="550px"
          >
            <Typography
              variant="h4"
              component="h1"
              color="#fff"
              fontWeight="bold"
              textTransform="capitalize"
            >
              comienza tu viaje hoy mismo
            </Typography>
            <Typography color="#fff" margin="0 auto">
              Asesoramiento integral para hacer realidad tu sueño de viajar,
              estudiar o trabajar en el extranjero
            </Typography>
            <Button
              variant="contained"
              color="action"
              sx={{
                borderRadius: "8px",
                width: "max-content",
                placeSelf: "center",
              }}
            >
              contactanos
            </Button>
          </Grid>
          <Box textAlign="center">
            <Typography color="#fff">Encuentrános en:</Typography>
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
              {heroMedia.map(({ key, route, Icon }) => {
                return (
                  <Grid key={key}>
                    <Link href={route} style={{ display: "flex" }}>
                      <Icon color="white" />
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Container>
      <Box sx={{ padding: { xs: "0 10px", sm: "0 30px" } }}>
        <Paper
          elevation={3}
          sx={{
            maxWidth: "1280px",
            margin: { xs: "-40px auto 0", sm: "-70px auto 0" },
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: "10px",
            padding: { xs: "60px 10px", sm: "90px 30px" },
          }}
        >
          <Container component="section" sx={{ display: "grid", gap: "30px" }}>
            <Grid
              sx={{
                display: "grid",
                gap: "15px",
                placeContent: "center",
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                color="primary"
                fontWeight="bold"
                textAlign="center"
              >
                Tu visa adecuada con nuestra asesoría experta
              </Typography>
              <Typography
                component="p"
                color="secondary"
                textAlign="center"
                sx={{ maxWidth: "660px", margin: "0 auto" }}
              >
                En nuestra agencia de asesoría de visas, nos especializamos en
                ofrecerte servicios de alta calidad para facilitar tu proceso de
                solicitud de visas.
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: "grid",
                gap: "40px",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                  md: "repeat(3, 1fr)",
                },
                placeContent: "center",
              }}
            >
              {visaCardData.map(({ key, ...props }) => {
                return <VisaCard key={key} {...props} />;
              })}
            </Grid>
          </Container>

          <Container component="section">
            <Box
              borderRadius="10px"
              display="grid"
              minHeight={{ xs: "intial", md: "400px" }}
              sx={{
                background: "linear-gradient(180deg, #42424A 0%, #191919 100%)",
                gridTemplateColumns: { sx: "1fr", md: "1fr 1fr 1fr" },
              }}
            >
              <Box
                borderRadius="10px"
                sx={{
                  paddingLeft: { sx: "0", md: "30px" },
                  height: "calc(100% + 16px + 16px)",
                  margin: "-16px 0",
                }}
              >
                <Image
                  width={500}
                  height={600}
                  src="/images/about-us.jpg"
                  alt="Sobre LatamVisaPro"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                    borderRadius:
                      useMediaQuery((theme) => theme.breakpoints.up("md")) &&
                      "10px",
                  }}
                />
              </Box>
              <Box
                display="grid"
                gap="20px"
                padding="30px"
                gridAutoRows="max-content"
              >
                <Typography
                  variant="h4"
                  component="h2"
                  color="#FFF"
                  fontWeight="bold"
                >
                  Acerca de nosotros
                </Typography>
                <Typography variant="subtitle1" color="#FFF">
                  En LATAMVISAPRO, nos enorgullece ser tu socio confiable en el
                  camino hacia tus metas internacionales.
                </Typography>
                <Typography variant="subtitle2" color="#FFF">
                  Nos especializamos en brindar servicios de asesoría de visas
                  de calidad, ayudando a nuestros clientes a navegar por el
                  complejo proceso de solicitud de visas y hacer realidad sus
                  sueños de viajar, estudiar o trabajar en el extranjero.
                </Typography>
              </Box>
              <Box
                display="grid"
                gridTemplateColumns="1fr"
                padding="30px"
                gap="20px"
                sx={{
                  placeSelf: { xs: "initial", md: "center" },
                }}
              >
                {companyValues.map(({ key, ...props }) => {
                  return <CompanyValue key={key} {...props} />;
                })}
              </Box>
            </Box>
          </Container>
        </Paper>
      </Box>
    </>
  );
}

const heroMedia = [
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

const visaCardData = [
  {
    key: "visa estudiante",
    title: "Visa estudiante",
    paragraph:
      "Estudia en el extranjero y amplía tus horizontes académicos con una experiencia única y enriquecedora.",
    image: "/images/visa-estudiante.jpg",
  },
  {
    key: "visa trabajo",
    title: "Visa trabajo",
    paragraph:
      "Convierte tus habilidades y experiencia en  oportunidades laborales internacionales.",
    image: "/images/visa-trabajo.jpg",
  },
  {
    key: "visa turismo",
    title: "Visa turismo",
    paragraph:
      "Descubre emocionantes nuevos destinos y sumérgete en experiencias culturales únicas.",
    image: "/images/visa-turismo.jpg",
  },
];

const companyValues = [
  { key: "excelencia", label: "Excelencia", Icon: EmojiEventsOutlined },
  { key: "confianza", label: "Confianza", Icon: VerifiedUserOutlined },
  { key: "compromiso", label: "Compromiso", Icon: HandshakeOutlined },
  {
    key: "transparencia",
    label: "Transparencia",
    Icon: PlagiarismOutlined,
  },
];
