import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box component="section" sx={{ pt: "70px" }}>
      <Container>
        <h1 className="visuallyHidden">Phonebook home page</h1>
        <Typography
          component="p"
          variant="h6"
          align="center"
          sx={{ p: "20px" }}
        >
          Nice to see you in the Phonebook! 👀 Now you don't need to remember the
          numbers of all your friends! Remember your Phonebook password and
          that's it! 🙌
        </Typography>
      </Container>
    </Box>
  );
}
