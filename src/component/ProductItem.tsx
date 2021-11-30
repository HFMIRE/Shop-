import React from "react";
import {
  Box,
  Image,
  Badge,
  Button,
  HStack,
  VStack,
  Text,
  Divider,
} from "@chakra-ui/react";
interface ProductProps {
  category: string;
  description: string;
  id: string;
  image: string;
  price: number;
  rating: object;
  title: string;
}
const ProductItem = ({
  id,
  category,
  description,
  image,
  price,
  title,
}: ProductProps) => {
  return (
    <Box>
      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
        noOfLines={1}
      >
        {title}
      </Box>
      <HStack spacing="15px">
        <Box w="300px" h="300px">
          <Image
            objectFit="scale-down"
            src={image}
            alt="product image"
            height="300px"
            margin="auto"
            padding="20px"
            width="500px"
          />
        </Box>

        <Box p="6" w="400px" h="300px">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="purple">
              {category}
            </Badge>
          </Box>
          <br />
          <Divider orientation="horizontal" />
          <br />
          <Box d="flex" alignItems="baseline">
            <Text mt="1" fontSize="sm" noOfLines={4}>
              {" "}
              {description}
            </Text>
          </Box>
        </Box>
        <Box w="200px" h="300px">
          <VStack spacing="24px">
            <Box
              as="span"
              color="purple.600"
              fontSize="lg"
              fontWeight="md"
              d="flex"
              alignItems="baseline"
              padding={5}
            >
              £ {price}
            </Box>

            <Button colorScheme="purple">View Product</Button>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default ProductItem;
