import React, { useContext, useEffect } from "react";
import { Box, Container } from "@mui/material";

import { productsContext } from "../../contexts/productsContext";

import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
  const { products, getProducts } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      <Box>
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
    </Container>
  );
};

export default ProductsList;
