import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Grid,
} from "@mui/material";

function MyCard() {
  return (
    <Card
      sx={{
        minWidth: 275,
        margin: "5px",
        borderRadius: "8px",
        minWidth: 275,
        margin: "5px",
        borderRadius: "8px",
        backgroundColor: "transparent",
        border: "1px solid #ccc",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          $OTSEA
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" component="div">
          Selling
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" value={0} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">
              0%
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2" component="div">
              Offered
            </Typography>
            <Typography variant="h6" component="div">
              45K 🟡
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" component="div">
              For
            </Typography>
            <Typography variant="h6" component="div">
              0.2266 💎
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" component="div">
          14 hours ago
        </Typography>
        <Typography variant="body2" component="div">
          $588.7
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MyCard;
