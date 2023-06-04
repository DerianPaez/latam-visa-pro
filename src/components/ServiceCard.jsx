import { Box, Card, CardContent, Typography } from "@mui/material";

export default function ServiceCard({ title, paragraph, Icon }) {
  return (
    <Card
      elevation={0}
      sx={{
        display: "grid",
        gridAutoRows: "max-content",
        gap: "10px",
        borderRadius: "8px",
      }}
    >
      <Box
        display="flex"
        width={50}
        height={50}
        bgcolor="action.main"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
        }}
      >
        <Icon color="white" style={{ fontSize: "30px" }} />
      </Box>
      <CardContent sx={{ display: "grid", gap: "15px", padding: 0 }}>
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
    </Card>
  );
}
