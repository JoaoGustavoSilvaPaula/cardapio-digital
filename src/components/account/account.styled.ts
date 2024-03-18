import { Image } from 'antd';
import styled from 'styled-components';


export const CardImage = styled(Image)`
  margin-left: 15px;
  border-radius: 0.75rem;
  padding: 15px;
  -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.61);
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
  background-color: white;
`;

export const AccountContainer = styled.div`
display: flex;
flex-direction: row;
align-items: end;
gap: 50px;
margin-top: -50px;

`

export const AccountDetails = styled.div`
display: flex;
flex-direction:column;

`
export const AccountName = styled.h1`
margin:0px;
@media (max-width: 425px) {
   font-size: medium;
  }
`

export const OpenClose = styled.p`
font-weight: 700;
`
export const GroupDetails = styled.div`
display: flex;
flex-direction: row;
align-items: baseline;
`