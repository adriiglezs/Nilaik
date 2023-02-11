
import React from "react";
import { popularProducts } from "./data";

const Product = ({ item: {img,title} }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
      </Info>
    </Container>
  );
};

export default Product;
