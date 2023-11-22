import {theme} from '@/styles';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Content = styled(View)`
  width: 200px;
  height: 250px;
  border-radius: 8px;
  background-color: ${theme.colors.background.BLACK_500};
  margin-right: 8px;
`;

export const ImageCard = styled(Image)`
  height: 100px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Title = styled(Text)`
  text-align: center;
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  color: ${theme.colors.primary.MAIN};
`;

export const Box = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
`;

export const InfoText = styled(Text)`
  font-size: 10px;
  color: ${theme.colors.common.WHITE};
  padding-left: 6px;
  padding-right: 8px;
`;

export const ButtonLink = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
`;

export const Link = styled(Text)`
  font-size: 12px;
  text-decoration: underline;
  color: ${theme.colors.primary.MAIN};
  padding-top: 8px;
`;
