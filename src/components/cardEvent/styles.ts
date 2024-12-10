import {theme} from '@/styles';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Content = styled(TouchableOpacity)`
  width: 350px;
  height: 150px;
  border-radius: 8px;
  background-color: ${theme.colors.background.BLACK_500};
  margin-right: 8px;

  flex-direction: row;
  align-items: flex-start;
`;

export const ImageCard = styled(Image)`
  height: 150px;
  width: 120px;
  border-radius: 8px;
`;

export const Title = styled(Text)`
  text-align: left;
  padding-top: 16px;
  padding-left: 8px;
  padding-bottom: 16px;

  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  color: ${theme.colors.common.WHITE};

  width: 230px;
`;

export const Box = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
`;

export const InfoText = styled(Text)`
  font-size: 14px;
  text-transform: uppercase;
  color: ${theme.colors.common.WHITE};
  padding-left: 6px;
`;

export const Link = styled(Text)`
  font-size: 12px;
  text-decoration: underline;
  color: ${theme.colors.common.WHITE};
  padding-left: 8px;
  padding-top: 8px;
`;

export const DivInfo = styled(View)``;
