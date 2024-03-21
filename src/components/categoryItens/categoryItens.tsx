import { useState, useEffect } from 'react';
import api from '../../shared/functions/api';
import { convertNumberToMoney } from '../../shared/functions/money';
import Card from '../card/Card';
import { CategoryBox, Container } from './categoryItens.style';
import Anchor from '../anchor/Anchor';
import ProductDrawer from '../drawer/productDrawer';
import { Button } from 'antd';

interface CategoryType {
  name: string;
  products: ProductType[];
}
interface ProductType {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function CategoryItens() {
  const [productList, setProductList] = useState<CategoryType[]>([]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCartIconClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const onClose = () => {
    setIsDrawerOpen(false);
  };

  const fetchProducts = async () => {
    const response = await api.get('/categories/products');
    console.log(response.data);
    setProductList(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Anchor
        list={productList.map((c) => {
          return c.name;
        })}
      />
      {productList.map((category, i) => {
        return (
          <Container id={`${category.name}-${i}`}>
            <h1>{category.name}</h1>
            <CategoryBox key={i}>
              {category.products.map((product, i) => {
                return (
                  <Card
                    onClick={handleCartIconClick}
                    key={i}
                    title={product.title}
                    description={product.description}
                    price={convertNumberToMoney(product.price)}
                    imageUrl={product.imageUrl ?? './no-image.png'}
                  />
                );
              })}
            </CategoryBox>
          </Container>
        );
      })}
      <ProductDrawer isOpen={isDrawerOpen} onClose={onClose}>
        <div>TESTE</div>
      </ProductDrawer>
    </>
  );
}
