import {theme} from '@/styles';
import {View, Text, ScrollView, Image} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  background-color: ${theme.colors.background.MAIN};
`;

export const BoxScroll = styled(ScrollView)``;

export const IntroText = styled(Text)`
  font-size: 18px;
  color: ${theme.colors.common.WHITE};
`;

export const Div = styled(View)`
  padding: 16px;
`;

export const Div2 = styled(View)`
  padding: 24px;
  flex-direction: row;
  /* justify-content: space-around; */
  flex-wrap: wrap;
  max-width: 100%;
`;
