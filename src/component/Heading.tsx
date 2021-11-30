import React from "react";
import { Box, Text, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Heading = () => {
  return (
    <Box
      d="flex"
      alignItems="baseline"
      justifyContent="center"
      ml={150}
      my={15}
    >
      <HStack spacing="30px">
        <Link to="/">
          <Text fontSize="2xl"> Shop</Text>
        </Link>
        <Link to="/">
          <Text fontSize="2xl"> About</Text>
        </Link>
        <Link to="/">
          <Text fontSize="2xl"> Cart()</Text>
        </Link>
      </HStack>
    </Box>
  );
};

export default Heading;
