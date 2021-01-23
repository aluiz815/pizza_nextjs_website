import React, { useEffect, useState } from 'react';
import { ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductImage,ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton } from './styles';
import axios from 'axios';
function Products({heading}) {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    async function handleProducts(){
      const response = await axios.get('http://localhost:3000/api/products')
      setProducts(response.data)
    }
    handleProducts();
  },[])

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {products.map((product,index) => {
          return (
            <ProductCard key={index}>
              <ProductImage src={product.img} alt={product.alt}/>
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          )
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
}

export default Products;