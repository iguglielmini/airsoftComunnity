import {theme} from '@/styles';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const TextBadge = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  padding-top: 8px;
  color: ${theme.colors.common.WHITE};
`;

export const Badge = styled(TouchableOpacity)`
  background-color: ${theme.colors.primary.MAIN};
  padding: 10px;
  border-radius: 110px;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
`;
