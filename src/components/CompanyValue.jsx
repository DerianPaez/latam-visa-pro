import { Box, Grid, Typography } from "@mui/material";

export default function CompanyValue({ label, Icon }) {
  return (
    <Grid
      display="grid"
      gridTemplateColumns="max-content 1fr"
      alignItems="center"
      gap="12px"
    >
      <Box
        display="flex"
        width={35}
        height={35}
        bgcolor="action.main"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
        }}
      >
        <Icon color="white" />
      </Box>
      <Typography component="h4" color="#FFF" autoCapitalize="true">
        {label}
      </Typography>
    </Grid>
  );
}
