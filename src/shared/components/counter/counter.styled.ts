import { Button } from 'antd';
import styled from 'styled-components';

export const ContainerCount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 2px solid rgb(220, 220, 220);
  border-radius: 6px;
`;

export const ButtonCount = styled(Button)`
  border: none;
`;
