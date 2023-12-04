import {theme} from '@/styles';
import {ImageBackground, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Content = styled(ImageBackground)`
  width: 100%;
  height: 80px;
  flex-direction: row;
  background-color: ${theme.colors.background.SECOND};
  justify-content: space-between;
  padding: 24px 16px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  z-index: 9999;
`;

export const Box = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text)`
  color: ${theme.colors.primary.MAIN};
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const SubTitle = styled(Text)`
  color: ${theme.colors.common.WHITE};
  font-size: 16px;
`;

export const CardUser = styled(TouchableOpacity)`
  width: 40px;
  height: 40px;
  border: 1px;
  border-radius: 8px;
`;

export const ImageUser = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border-color: ${theme.colors.primary.MAIN};
`;
