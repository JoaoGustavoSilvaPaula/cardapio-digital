import { Image } from 'antd';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex: 1;
  min-width: 300px;
  justify-content: flex-start;
  background-color: rgb(255 255 255);
  border-radius: 0.5rem;
  border-color: rgb(0 0 0 / 12%);
  border-width: 1px;
  border-style: solid;
  padding: 10px;
  cursor: pointer;

  @media (min-width: 1280px) {
    max-width: 400px;
  }
  
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0%;
`;

export const CardTitle = styled.h3`
  margin-bottom: -10px;
`;

export const CardDescription = styled.p``;

export const CardImage = styled(Image)`
  border-radius: 0.5rem;
`;
