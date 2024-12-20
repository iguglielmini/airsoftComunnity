import {theme} from '@/styles';
import {
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';

export const Content = styled(ImageBackground)`
  width: 100%;
  height: 80px;
  flex-direction: row;
  background-color: ${theme.colors.background.SECOND};
  justify-content: space-between;
  padding: 24px 16px;
  z-index: 9999;
`;

export const Box = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text)`
  color: ${theme.colors.common.WHITE};
  font-size: 18px;
  padding-left: 8px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const SubTitle = styled(Text)`
  color: ${theme.colors.common.WHITE};
  font-size: 16px;
`;

export const CardUser = styled(TouchableOpacity)`
  width: 60px;
  height: 60px;
`;

export const ImageUser = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border-color: ${theme.colors.primary.MAIN};
`;
