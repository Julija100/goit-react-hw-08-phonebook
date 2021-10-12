import { Box, Typography } from "@mui/material";


export default function NoContactsView() {
  return (
    <Box sx={{ ml: "auto", mr: "auto", textAlign: "center" }}>
      <Typography component="p" variant="h6" align="center">
        You have no contacts yet ...
      </Typography>

    </Box>
  );
}
