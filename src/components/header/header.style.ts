import { LogoutOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import styled from 'styled-components';

export const MyHeader = styled.header`
  height: 72px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  z-index: 1;
  -webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.47);
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.47);
  @media (max-width: 1024px) {
    display: none;
  }
  position: fixed;
`;

export const LogoExit = styled(LogoutOutlined)`
  font-size: 30px;
  color: gray;
`;

export const User = styled(UserOutlined)`
  font-size: 30px;
  color: gray;
`;

export const CartButton = styled.div`
  height: 100%;
`;

export const ShoppingCart = styled(ShoppingCartOutlined)`
  font-size: 30px;
  color: gray;
`;
export const CountItems = styled.span`
  position: absolute;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: red;
  color: white;
  font-size: 8pt;
  text-align: center;
  line-height: 20px;
  z-index: 50;
  margin-left: 20px;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  height: 70%;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SearchInput = styled(Input)`
  width: 100%;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1272px;
  justify-content: space-between;
  padding: 10px;
  gap: 20px;
`;
