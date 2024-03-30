import { Container, Description, ImageBox, ProductContainer, Title } from './product.style';
import Counter from '../../shared/components/counter/counter';
import { useEffect, useState } from 'react';
import { convertNumberToMoney } from '../../shared/functions/money';
import ComplementGroup from '../complementGroup/complementGroup';
import { ProductType } from '../../types/productType';

import {
  ComplementBoxObservation,
  ComplementBoxTextArea,
  ComplementButton,
} from '../complement/complement.styled';

interface ProductProps {
  item: ProductType;
}
export default function Product({ item }: ProductProps) {
  const [totalValue, setTotalValue] = useState(item.price);
  const [countSelectedProducts, setCountSelectedProducts] = useState(1);

  useEffect(() => {
    const total = countSelectedProducts * item.price;
    setTotalValue(total);
  }, [countSelectedProducts]);

  const calculateTotalValue = (count: number) => {
    setCountSelectedProducts(countSelectedProducts + count);
    const total = countSelectedProducts * item.price;
    setTotalValue(total);
  };

  return (
    <ProductContainer>
      <ImageBox preview={false} src="./no-image.png" />
      <Title>{item.title}</Title>
      <Description>{item.description}</Description>

      {item.complementGroup.map((c) => {
        return <ComplementGroup key={c.complementGroup.id} complementGroup={c} />;
      })}

      <ComplementBoxObservation>
        <h4>Alguma observação?</h4>
        <ComplementBoxTextArea placeholder="Ex: tirar a cebola, a maionese à parte e etc." />
        <Container>
          <Counter onCaculate={calculateTotalValue} initialValue={1} addDisable={false} />
          <ComplementButton>Adicionar {convertNumberToMoney(totalValue)}</ComplementButton>
        </Container>
      </ComplementBoxObservation>
    </ProductContainer>
  );
}
