import {theme} from '@/styles';
import {ImageBackground, Text, View} from 'react-native';
import styled from 'styled-components/native';

export const Content = styled(ImageBackground)`
  width: 100%;
  height: 250px;
  justify-content: flex-end;
`;

export const Box = styled(View)`
  padding: 16px;
`;

export const Title = styled(Text)`
  color: ${theme.colors.primary.MAIN};
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const SubTitle = styled(Text)`
  color: ${theme.colors.common.WHITE};
  font-size: 16px;
`;
