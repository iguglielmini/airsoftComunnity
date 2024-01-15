import {theme} from '@/styles';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(ScrollView)`
  flex: 1;
  background-color: ${theme.colors.background.MAIN};
`;

export const ContentCategory = styled(ScrollView)`
  padding-left: 16px;
  padding-right: 68px;
`;

export const SectionCard = styled(View)`
  padding-top: 24px;
`;

export const TextSection = styled(Text)`
  color: ${theme.colors.primary.MAIN};
  font-size: 21px;
  font-weight: 800;
  line-height: 26px;
`;
