import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function VisaCard({ title, paragraph, image }) {
  return (
    <Card
      elevation={4}
      sx={{
        display: "grid",
        gridAutoRows: "max-content",
        gap: "10px",
        borderRadius: "8px",
      }}
    >
      <Grid
        sx={{
          width: "100%",
          minHeight: "250px",
          padding: "15px",
        }}
      >
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Grid>
      <Grid
        padding="0 20px 20px"
        sx={{ display: "grid", gap: "10px", padding: "0 25px 20px" }}
      >
        <CardContent sx={{ display: "inherit", gap: "inherit", padding: "0" }}>
          <Typography
            variant="h6"
            component="h3"
            color="primary"
            fontWeight="bold"
            textTransform="capitalize"
          >
            {title}
          </Typography>
          <Typography variant="p" color="secondary">
            {paragraph}
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: "0" }}>
          <Link href="/">
            <Button variant="outlined" size="small" color="primary">
              Consultar
            </Button>
          </Link>
        </CardActions>
      </Grid>
    </Card>
  );
}
