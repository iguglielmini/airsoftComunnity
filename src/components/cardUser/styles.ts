import {theme} from '@/styles';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import styled from 'styled-components/native';

export const CardUser = styled(TouchableOpacity)`
  width: 30px;
  height: 30px;
  border: 1px;
  border-radius: 8px;
`;

export const ImageUser = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border-color: ${theme.colors.primary.MAIN};
`;

export const TextName = styled(Text)`
  font-size: 12px;
  color: ${theme.colors.common.WHITE};
  padding-left: 8px;
  font-weight: bold;
`;

export const TextSub = styled(Text)`
  font-size: 12px;
  color: ${theme.colors.common.WHITE};
  padding-left: 8px;
  font-weight: 400;
`;

export const Box = styled(View)`
  flex-direction: column;
`;

export const Container = styled(View)`
  flex-direction: row;
`;
