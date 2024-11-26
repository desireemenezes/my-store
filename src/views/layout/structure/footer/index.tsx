
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function GuestFooter() {
  return (
    <Paper sx={{
      marginTop: 'calc(10% + 60px)',
      width: '100%',
      position: 'fixed',
      bottom: 0,

    }} component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1
          }}
        >
          <div>
          </div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2024. [Desirée]
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}