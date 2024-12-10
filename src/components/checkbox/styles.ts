import styled from 'styled-components/native';
import {Text, View} from 'react-native';

import {theme} from '@/styles';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  margin: 8px 0;
`;

export const Box = styled(View)`
  width: 24px;
  height: 24px;
  border-width: 2px;
  border-color: ${theme.colors.primary.MAIN};
  background-color: ${({theme, checked}) =>
    checked ? theme.colors.primary.MAIN : 'transparent'};
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const Label = styled(Text)`
  font-size: 16px;
  color: ${theme.colors.primary.MAIN};
`;
