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
import AccordionItem from "../src/components/AccordionItem";
import { useState } from "react";

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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

          <Container
            component="section"
            sx={{ marginBottom: { xs: "", md: "16px" } }}
          >
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

          <Container component="section" sx={{ display: "grid", gap: "30px" }}>
            <Box display="grid" gap="15px">
              <Typography
                variant="h4"
                component="h1"
                color="primary"
                fontWeight="bold"
                textAlign="center"
                textTransform="capitalize"
              >
                Preguntas frecuentes
              </Typography>
              <Typography
                color="secondary"
                maxWidth="660px"
                textAlign="center"
                margin="0 auto"
              >
                En nuestra sección de Preguntas Frecuentes (FAQ), hemos
                recopilado las respuestas a las consultas más comunes
                relacionadas con los procesos de visas.
              </Typography>
            </Box>
            <Box
              display="grid"
              gridTemplateColumns="1fr"
              gridAutoRows="max-content"
            >
              {FAQ.map(({ key, question, answer }) => {
                return (
                  <AccordionItem
                    key={key}
                    id={key}
                    title={question}
                    description={answer}
                    expanded={expanded}
                    handleChange={handleChange}
                  />
                );
              })}
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

const FAQ = [
  {
    key: "001",
    question: "¿Qué tipos de visas ofrecen asesoría?",
    answer:
      "Ofrecemos asesoría en visas de turismo, trabajo, estudio, negocios y visas familiares, entre otras.",
  },
  {
    key: "002",
    question: "¿Cuánto tiempo tarda el proceso de obtención de una visa?",
    answer:
      "El tiempo del proceso de obtención de una visa puede variar según el país de destino y el tipo de visa. En general, puede tomar de 2 a 24 semanas.",
  },
  {
    key: "003",
    question: "¿Cuáles son los requisitos para aplicar a una visa?",
    answer:
      "Los requisitos para aplicar a una visa varían dependiendo del tipo de visa y del país de destino. Por lo general, se requiere un pasaporte válido, formulario de solicitud, fotografía, evidencia de solvencia económica y otros documentos específicos.",
  },
  {
    key: "004",
    question: "¿Cuánto cuesta la asesoría de visas?",
    answer:
      "Nuestros precios de asesoría varían según el tipo de visa y la complejidad del caso. Por favor, contáctanos para obtener una cotización personalizada.",
  },
  {
    key: "005",
    question: "¿Necesito una cita para la asesoría?",
    answer:
      "Sí, recomendamos programar una cita para asegurar la disponibilidad de nuestros consultores y brindar un servicio personalizado.",
  },
  {
    key: "006",
    question: "¿Cuál es el proceso para solicitar una visa con su ayuda?",
    answer:
      "El proceso para solicitar una visa con nuestra ayuda incluye:\n1.	consulta inicial\n2.	evaluación de elegibilidad\n3.	preparación de documentos\n4.	revisión de la aplicación\n5.	seguimiento del proceso.",
  },
  {
    key: "007",
    question:
      "¿Pueden ayudarme a completar los formularios de solicitud de visa?",
    answer:
      "Sí, nuestros expertos te ayudarán a completar correctamente los formularios de solicitud de visa.",
  },
  {
    key: "008",
    question: "¿Cuáles son los documentos necesarios para aplicar a una visa?",
    answer:
      "Los documentos necesarios para aplicar a una visa varían según el tipo de visa y el país de destino. Por lo general, se requiere un pasaporte válido, formulario de solicitud, fotografía, evidencia de solvencia económica y otros documentos específicos.",
  },
  {
    key: "009",
    question: "¿Tienen experiencia en casos de visas rechazadas?",
    answer:
      "Sí, tenemos experiencia en casos de visas rechazadas y podemos ofrecer asesoría en cómo mejorar tus posibilidades en una nueva solicitud.",
  },
  {
    key: "010",
    question:
      "¿Cuál es la tasa de éxito en las solicitudes de visa que asesoran?",
    answer:
      "Nuestra tasa de éxito en las solicitudes de visa es alta debido a nuestra experiencia y conocimiento en los requerimientos de diferentes países y tipos de visas.",
  },
  {
    key: "011",
    question:
      "¿Ofrecen asesoría en apelaciones o reconsideraciones en caso de rechazo?",
    answer:
      "Sí, ofrecemos asesoría en apelaciones o reconsideraciones en caso de rechazo de la visa, según las opciones disponibles para el tipo de visa y el país de destino.",
  },
  {
    key: "012",
    question:
      "¿Pueden ayudarme a obtener una visa de trabajo, estudio o turismo?",
    answer:
      "Sí, podemos ayudarte a obtener visas de trabajo, estudio y turismo, así como otros tipos de visas según tus necesidades.",
  },
  {
    key: "013",
    question:
      "¿Cuánto tiempo debo esperar antes de solicitar una visa después de un rechazo?¿Pueden ayudarme a obtener una visa de trabajo?",
    answer:
      "El tiempo de espera antes de volver a solicitar una visa después de un rechazo puede variar según el país y la razón del rechazo. Por lo general, se recomienda esperar de 3 a 6 meses y abordar las razones del rechazo antes de volver a aplicar.",
  },
  {
    key: "014",
    question: "¿Ofrecen asesoría para la renovación de visas?",
    answer:
      "Sí, ofrecemos asesoría para la renovación de visas, ayudándote a comprender los requisitos y a preparar los documentos necesarios.",
  },
];
