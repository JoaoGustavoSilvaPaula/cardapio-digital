import { useEffect, useState } from 'react';
import Counter from '../../shared/components/counter/counter';
import { ComplementType } from '../../types/complementType';

import { ImageBox } from '../product/product.style';
import {
  ComplementItem,
  ComplementText,
  ComplementContainer,
  ComplementGroupRadio,
} from './complement.styled';
import { useProductStore } from '../../stores/productStore';

interface complementProps {
  max: number;
  complement: ComplementType;
}

export default function Complement({ max, complement }: complementProps) {
  const [checked, setChecked] = useState(0);

  const [updateComplement, countSelectedComplement, complements] = useProductStore((state) => [
    state.updateComplement,
    state.countSelectedComplement,
    state.complements,
  ]);

  const calculatelValue = (count: number) => {
    if (countSelectedComplement <= max) {
      updateComplement(complement, count);
    }
  };

  useEffect(() => {
    console.log('complements', complements);
  }, [complements]);

  const disable = (count: number) => {
    if (countSelectedComplement >= max && count == 0) return true;
    return false;
  };

  return (
    <ComplementItem>
      <ComplementText>{complement.name}</ComplementText>
      <ComplementContainer>
        <ImageBox width={60} height={50} preview={false} src="./no-image.png" />
        {max == 1 && (
          <ComplementGroupRadio
            type="radio"
            value={complement.id}
            checked={checked === complement.id}
            onChange={() => {
              setChecked(complement.id);
            }}
          />
        )}
        {max > 1 && (
          <Counter
            onCaculate={calculatelValue}
            onDisabled={disable}
            addDisable={countSelectedComplement >= max}
          />
        )}
      </ComplementContainer>
    </ComplementItem>
  );
}
