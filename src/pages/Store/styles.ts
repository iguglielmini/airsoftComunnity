import {theme} from '@/styles';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(ScrollView)`
  flex: 1;
  padding: 0 16px 0px 16px;
  background-color: ${theme.colors.background.MAIN};
`;

export const SectionCard = styled(View)`
  padding-top: 24px;
`;

export const TextSection = styled(Text)`
  color: ${theme.colors.common.WHITE};
  font-size: 21px;
  font-weight: bold;
  font-weight: 800;
  line-height: 26px;
`;
