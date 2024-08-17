import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        // backgroundColor: "#3f51b5", // Change the background color to a deep blue
        width: "100%",
        borderRadius: "0 0 16px 16px",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              fontSize: "1.8rem", // Larger font size for "MyApp"
              color: "#ffffff", // White text color
              fontWeight: "bold", // Bold text
              "&:hover": {
                color: "#ffeb3b", // Yellow color on hover
              },
            }}
          >
            MyApp
          </Typography>
        </NavLink>
        <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <NavLink
            to={"/Registre"}
            style={{
              textDecoration: "none",
              color: "#ffffff", // White text color
              fontSize: "1.2rem", // Slightly larger font size
              fontWeight: "500", // Medium weight
              marginLeft: "20px", // Space between MyApp and Login
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#ffeb3b"; // Yellow color on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#ffffff"; // Return to white color when not hovered
            }}
          >
            Registre
          </NavLink>

          <NavLink
            to={"/Login"}
            style={{
              textDecoration: "none",
              color: "#ffffff", // White text color
              fontSize: "1.2rem", // Slightly larger font size
              fontWeight: "500", // Medium weight
              marginLeft: "20px", // Space between MyApp and Login
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#ffeb3b"; // Yellow color on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#ffffff"; // Return to white color when not hovered
            }}
          >
            Login
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
