import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Compents/NavBar";
import { Container, Grid, Typography } from "@mui/material";
import MyCard from "./Compents/MyCard";
import { chunk } from "lodash";
import { Route, Routes } from "react-router-dom";
import { Login } from "@mui/icons-material";
import THELogin from "./Compents/Login";
import Registre from "./Compents/Registre";

function App() {
  const [count, setCount] = useState(0);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const cardsPerRow = 8;
  const cardData = [1, 2, 3, 4, 5, 6, 7, 8];

  const cardRows = Array.from(
    { length: Math.ceil(cardData.length / cardsPerRow) }, //2
    (_, index) => cardData.slice(index * cardsPerRow, (index + 1) * cardsPerRow)
  );

  const style = {
    backgroundImage: `url('https://i.pinimg.com/originals/5d/a7/d7/5da7d7ae5bf9ea9dc59d83b3fc5cc838.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Adjust height as needed
    width: "100%", // Adjust width as needed
  };
  return (
    <div style={style}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Container sx={{ mt: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  margin: "25px", // Adjust margin as needed
                  borderRadius: "8px",
                }}
                gutterBottom
              ></Typography>

              <Grid container spacing={2}>
                {cardRows.map((row, rowIndex) => (
                  <Grid container spacing={2}>
                    {cardRows.map((row, rowIndex) => (
                      <Grid container item xs={12} key={rowIndex}>
                        {row.map(() => (
                          <MyCard />
                        ))}
                      </Grid>
                    ))}
                  </Grid>
                ))}
              </Grid>
            </Container>
          }
        />

        <Route path="/login" element={<THELogin></THELogin>} />
        <Route path="/Registre" element={<Registre></Registre>} />
      </Routes>
    </div>
  );
}

export default App;
