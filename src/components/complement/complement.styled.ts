import { Button } from 'antd';
import styled from 'styled-components';

export const ComplementItem = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  margin-top: 10px;
  padding: 10px;
`;

export const ComplementContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const ComplementGroupRadio = styled.input`
  width: 24px;
  height: 24px;
`;
export const ComplementText = styled.p`
  font-size: 16px;
`;

export const ComplementBoxObservation = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ComplementBoxTextArea = styled.textarea`
  border: none;
  height: auto;
  font-size: 16px;
  line-height: 24px;
  color: rgb(62, 62, 62);
  -webkit-box-flex: 1;
  flex-grow: 1;
  padding: 0px;
  overflow: auto;
  resize: none;
  cursor: auto;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 6px;
  overflow: hidden;
  transition: box-shadow 100ms ease-in-out 0s;
  display: flex;
  -webkit-box-align: baseline;
  align-items: baseline;
  padding: 8px;
`;

export const ComplementButton = styled(Button)`
  margin-top: 10px;
  width: 70%;
  height: 45px;
  color: white;
  font-weight: 700;
  background-color: rgb(26, 26, 26);
  &:hover {
    background-color: rgb(63, 62, 62) !important;
    color: white !important;
  }
  &:disabled {
    color: rgb(166, 166, 166);
    background-color: rgb(220, 220, 220);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
`;
