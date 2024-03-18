import { Layout, Image } from 'antd';

import styled from 'styled-components';

export const ScreenLayout = styled(Layout)`
  display: flex;
  align-items: center;
`;
export const ScreenContainer = styled(Layout)`
  display: flex;
  align-items: center;
  max-width: 1272px;
`;
export const ScreenContent = styled(Layout)`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 22px;
  background-color: #fff4f5f7;
  margin-bottom: 0px;
  width: 100%;
  flex-wrap: wrap;
`;

export const ImageTop = styled(Image)`
  height: 150px;
  margin-top: -72px;
  margin-bottom: -22px;
  border-radius: 0.75rem;
  border-color: rgb(255 255 255);
  border-width: 6px;
  border-style: solid;
  -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.61);
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: 1024px) {
    margin-top: 0px;
    border-radius: 0px;
    border-color: rgb(255 255 255);
    border-width: 0px;
    border-style: solid;
    -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    -moz-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  }
`;
