import {theme} from '@/styles';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  background-color: ${theme.colors.background.MAIN};
`;

export const ContentIntroText = styled(View)`
  margin-top: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  max-width: 50%;
  background-color: ${theme.colors.background.THIRD};
`;

export const IntroText = styled(Text)`
  font-size: 18px;
  color: ${theme.colors.common.WHITE};
`;

export const BoxH = styled(ScrollView)`
  padding-left: 16px;
  padding-top: 16px;
`;

export const BoxV = styled(ScrollView)`
  margin-top: -30px;
  margin-bottom: 24px;
`;
