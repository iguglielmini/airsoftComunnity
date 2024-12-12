import {theme} from '@/styles';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  background-color: ${theme.colors.background.MAIN};
`;

export const IntroText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.common.WHITE};
`;

export const BoxV = styled(ScrollView)`
  margin-bottom: 24px;
`;

export const Box = styled(View)`
  margin-top: 20px;
`;
