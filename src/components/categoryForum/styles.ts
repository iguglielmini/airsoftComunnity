import {theme} from '@/styles';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const SectionCard = styled(View)`
  padding-top: 24px;
`;

export const CategoryButton = styled(TouchableOpacity)`
  margin-right: 8px;
`;

export const BoxButton = styled(View)`
  width: 100px;
  height: 100px;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background.BLACK_500};
  border: 1px;
  border-color: ${theme.colors.primary.MAIN};
`;

export const TextButton = styled(Text)`
  color: ${theme.colors.primary.MAIN};
  font-size: 12px;
  font-weight: 800;
  text-align: center;
  padding-top: 8px;
`;
