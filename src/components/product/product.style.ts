import styled from 'styled-components';
import { Image } from 'antd';

export const ImageBox = styled(Image)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1``;

export const Description = styled.p``;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
`;
