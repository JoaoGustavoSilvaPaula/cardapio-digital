import { useState, useEffect } from 'react';
import api from '../../shared/functions/api';
import { convertNumberToMoney } from '../../shared/functions/money';
import Card from '../card/Card';
import { CategoryBox, Container } from './categoryItens.style';
import Anchor from '../anchor/Anchor';
import ProductDrawer from '../drawer/productDrawer';
import Product from '../product/product';
import { CategoryType } from '../../types/categoryType';
import { ProductType } from '../../types/productType';
import { useProductStore } from '../../stores/productStore';

export default function CategoryItens() {
  const [addProduct, removeProduct] = useProductStore((state) => [
    state.addProduct,
    state.removeProduct,
  ]);
  const [productList, setProductList] = useState<CategoryType[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>({} as ProductType);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCartIconClick = (categoryIndex: number, productIndex: number) => {
    const products = productList.find((x) => x.id == categoryIndex);
    const product = products?.products.find((x) => x.id == productIndex);
    if (product) {
      setSelectedProduct(product);
      addProduct({ id: product.id, name: product.title });
      setIsDrawerOpen(!isDrawerOpen);
    }
  };

  const onClose = () => {
    setIsDrawerOpen(false);
    removeProduct();
  };

  const fetchProducts = async () => {
    const response = await api.get('/categories/products');

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
      {productList.map((category, ci) => {
        return (
          <Container key={ci} id={`${category.name}-${ci}`}>
            <h1>{category.name}</h1>
            <CategoryBox key={ci}>
              {category.products.map((product, pi) => {
                return (
                  <Card
                    onClick={() => {
                      handleCartIconClick(category.id, product.id);
                    }}
                    key={pi}
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
      <ProductDrawer title={'Croq Salgados'} isOpen={isDrawerOpen} onClose={onClose}>
        <Product item={selectedProduct} />
      </ProductDrawer>
    </>
  );
}
