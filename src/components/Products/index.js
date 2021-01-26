import { useEffect, useState } from 'react';
import { ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductImage,ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton } from './styles';
import api from '../../services/api';
function Products({heading}) {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    async function handleProducts(){
      const response = await api.get('products')
      if(heading === "Escolha seu Sabor Favorito"){
        setProducts(response.data.products1)
      }else {
        setProducts(response.data.products2)
      }
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