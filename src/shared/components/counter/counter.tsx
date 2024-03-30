import { useState } from 'react';
import { ButtonCount, ContainerCount } from './counter.styled';
import { Disable } from 'react-disable';

type CounterProps = {
  onCaculate: (count: number) => void;
  initialValue?: number;
  onDisabled?: (count: number) => boolean;
  addDisable: boolean;
};

export default function Counter({
  onCaculate,
  initialValue,
  onDisabled,
  addDisable,
}: CounterProps) {
  const [count, setCount] = useState(initialValue != undefined ? initialValue : 0);

  const handleCountAddition = (count: number) => {
    if (count >= 0) {
      setCount(count + 1);
      onCaculate(+1);
    }
  };
  const handleCountSubtraction = (count: number) => {
    if (count > 0) {
      setCount(count - 1);
      onCaculate(-1);
    }
  };
  const handleDisabled = (count: number) => {
    if (onDisabled != undefined) {
      return onDisabled(count);
    }
    return false;
  };

  return (
    <Disable disabled={handleDisabled(count)}>
      <ContainerCount>
        <ButtonCount
          size="large"
          onClick={() => {
            handleCountSubtraction(count);
          }}
        >
          -
        </ButtonCount>
        <p>{count}</p>
        <ButtonCount
          size="large"
          onClick={() => {
            addDisable ? null : handleCountAddition(count);
          }}
        >
          +
        </ButtonCount>
      </ContainerCount>
    </Disable>
  );
}
