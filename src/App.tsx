import * as React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductGrid from "./component/ProductGrid";

export const App = () => (
  <ChakraProvider>
    <Router>
      <Box textAlign="center" fontSize="xl">
        <Routes>
          <Route path="/" element={<ProductGrid />} />
        </Routes>
      </Box>
    </Router>
  </ChakraProvider>
);
