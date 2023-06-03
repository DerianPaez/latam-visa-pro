import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

export default function AccordionItem({
  id,
  title,
  description,
  expanded,
  handleChange,
}) {
  return (
    <Accordion
      expanded={expanded === id}
      onChange={handleChange(id)}
      elevation={0}
      sx={{ margin: "0px !important", background: "transparent" }}
    >
      <AccordionSummary expandIcon={<ExpandMore />} sx={{ minHeight: "72px" }}>
        <Typography color="secondary" fontWeight="bold">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color="secondary">{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
