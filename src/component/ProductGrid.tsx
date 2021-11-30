import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Box, GridItem } from "@chakra-ui/react";
import ProductItem from "./ProductItem";
import Heading from "./Heading";
const ProductGrid = () => {
  const [allProducts, setallProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        console.log(response.data);
        setallProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [allProducts]);
  return (
    <Box>
      <Heading />
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={8}
      >
        {allProducts.map(
          ({ category, description, id, image, price, rating, title }, idx) => {
            return (
              <GridItem
                colStart={2}
                colEnd={6}
                boxShadow="lg"
                p="6"
                rounded="lg"
                bg="white"
                ml={250}
              >
                <ProductItem
                  category={category}
                  key={idx}
                  description={description}
                  id={id}
                  image={image}
                  price={price}
                  rating={rating}
                  title={title}
                />
              </GridItem>
            );
          }
        )}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
