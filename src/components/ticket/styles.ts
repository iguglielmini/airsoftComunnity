import styled from 'styled-components/native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {theme} from '@/styles';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.secondary.MAIN};
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.background.MAIN};
  margin: 10px 16px;
  position: relative;
`;

export const ImageCard = styled(Image)`
  height: 100px;
  width: 100px;
  border-radius: 100px;
`;

export const LeftSide = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const Middle = styled(View)`
  align-items: flex-start;
  justify-content: flex-start;
`;

export const RightSide = styled(View)`
  width: 20%;
  align-items: center;
  justify-content: center;
`;

export const CompanyName = styled(Text)`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${theme.colors.primary.MAIN};
`;

export const Value = styled(Text)`
  font-size: 32px;
  font-weight: bold;
  color: ${theme.colors.info.WARNING};
  padding-right: 8px;
`;

export const CouponText = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.colors.primary.MAIN};
`;

export const Validity = styled(Text)`
  font-size: 10px;
  color: ${theme.colors.gray.MAIN_4};
`;

export const DividerH = styled(View)`
  width: 2px;
  margin-left: 16px;
  margin-right: 16px;
  background-color: ${theme.colors.primary.MAIN};
`;

export const ValueCupon = styled(View)`
  flex-direction: row;
  align-items: flex-end;
  padding-bottom: 16px;
`;

export const ContentView = styled(View)`
  flex-direction: row;
  /* width: 50%; */
`;
