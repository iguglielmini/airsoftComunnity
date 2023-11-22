import {theme} from '@/styles';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Content = styled(TouchableOpacity)`
  border-radius: 8px;
  margin-right: 8px;
`;

export const ImageCard = styled(ImageBackground)`
  width: 225px;
  height: 225px;
  border-radius: 8px;
`;

export const Title = styled(Text)`
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;

  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  color: ${theme.colors.primary.MAIN};
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
  color: ${theme.colors.primary.MAIN};
  padding-left: 8px;
  padding-top: 8px;
`;
