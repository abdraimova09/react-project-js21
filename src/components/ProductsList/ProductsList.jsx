import React, { useContext, useEffect, useState } from "react";
import { Box, Container, TextField } from "@mui/material";

import { productsContext } from "../../contexts/productsContext";

import ProductCard from "../ProductCard/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductsList = () => {
  const { products, getProducts } = useContext(productsContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  // console.log(window.location.search);

  return (
    <Container>
      <Box>
        <TextField
          value={search}
          onChange={e => setSearch(e.target.value)}
          label="Search"
          variant="outlined"
        />
      </Box>
      <Box>
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
    </Container>
  );
};

export default ProductsList;
