import {theme} from '@/styles';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const ImageButton = styled(TouchableOpacity)``;

export const Content = styled(LinearGradient)`
  border-radius: 10px;
  width: 225px;
  height: 225px;

  justify-content: flex-end;
  padding: 16px;
`;

export const ImageCard = styled(ImageBackground)`
  width: 225px;
  height: 225px;
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  color: ${theme.colors.primary.MAIN};
`;

export const SubTitle = styled(Text)`
  font-weight: bold;
  font-size: 10px;
  color: ${theme.colors.primary.MAIN};
`;

export const PriceText = styled(Text)`
  font-weight: bold;
  font-size: 14px;
  color: ${theme.colors.common.WHITE};
`;

export const Link = styled(Text)`
  font-size: 12px;
  text-decoration: underline;
  color: ${theme.colors.primary.MAIN};
  padding-top: 8px;
`;

export const Box = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
`;
