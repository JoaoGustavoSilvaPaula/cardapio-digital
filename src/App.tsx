import { useEffect, useState } from 'react';
import './App.css';
import Account from './components/account/Account';
import Card from './components/card/Card';
import Screen from './components/screen/Screen';
import Tabs from './components/tabs/Tabs';
import { convertNumberToMoney } from './shared/functions/money';

import api from './shared/functions/api';

interface ProductType {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const List: ProductType[] = [
  {
    title: 'Produto 01',
    description: '100 Salgados + coca',
    price: 16.9,
    imageUrl:
      'https://www.imagensempng.com.br/wp-content/uploads/2023/04/Coxinha-Png-1024x1024.png',
  },
  {
    title: 'Produto 01',
    description: '100 Salgados + coca',
    price: 16.9,
    imageUrl:
      'https://www.imagensempng.com.br/wp-content/uploads/2023/04/Coxinha-Png-1024x1024.png',
  },
  {
    title: 'Produto 01',
    description: '100 Salgados + coca',
    price: 16.9,
    imageUrl:
      'https://www.imagensempng.com.br/wp-content/uploads/2023/04/Coxinha-Png-1024x1024.png',
  },
  {
    title: 'Produto 01',
    description: '100 Salgados + coca',
    price: 16.9,
    imageUrl:
      'https://www.imagensempng.com.br/wp-content/uploads/2023/04/Coxinha-Png-1024x1024.png',
  },
  {
    title: 'Produto 01',
    description: '100 Salgados + coca',
    price: 16.9,
    imageUrl:
      'https://www.imagensempng.com.br/wp-content/uploads/2023/04/Coxinha-Png-1024x1024.png',
  },
  {
    title: 'Produto 01',
    description: '100 Salgados + coca',
    price: 16.9,
    imageUrl:
      'https://www.imagensempng.com.br/wp-content/uploads/2023/04/Coxinha-Png-1024x1024.png',
  },
  {
    title: 'Produto 01',
    description: '100 Salgados + coca',
    price: 16.9,
    imageUrl:
      'https://www.imagensempng.com.br/wp-content/uploads/2023/04/Coxinha-Png-1024x1024.png',
  },
  {
    title: 'Produto 01',
    description: '100 Salgados + coca',
    price: 16.9,
    imageUrl:
      'https://www.imagensempng.com.br/wp-content/uploads/2023/04/Coxinha-Png-1024x1024.png',
  },
  {
    title: 'Produto 01',
    description: '100 Salgados + coca',
    price: 16.9,
    imageUrl:
      'https://www.imagensempng.com.br/wp-content/uploads/2023/04/Coxinha-Png-1024x1024.png',
  },
];

function App() {
  const [productList, setProductList] = useState<ProductType[]>([]);

  const fetchProducts = async () => {
    const response = await api.get('/products');
    setProductList(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Screen>
      <Account />
      <Tabs />
      {productList.map((p) => {
        return (
          <Card
            title={p.title}
            description={p.description}
            price={convertNumberToMoney(p.price)}
            imageUrl={p.imageUrl}
          />
        );
      })}
    </Screen>
  );
}

export default App;
