import { Tag, Button } from 'antd';
import styled from 'styled-components';

export const ComplementGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background-color: rgb(242, 242, 242);
  width: 100%;
  height: 60px;
  gap: 8px;
`;

export const ComplementGroupRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ComplementGroupName = styled.h4`
  margin: 0;
`;
export const ComplementGroupCount = styled.h4`
  margin: 0;
  color: darkgrey;
`;

export const ComplementGroupRequired = styled(Tag)`
  font-weight: 500;
`;
