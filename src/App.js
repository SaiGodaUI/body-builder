import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExxerciseDetails from "./pages/ExxerciseDetails";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExxerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
