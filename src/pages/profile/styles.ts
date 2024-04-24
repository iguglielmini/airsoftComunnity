import {theme} from '@/styles';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  background-color: ${theme.colors.background.MAIN};
`;

export const BoxV = styled(ScrollView)`
  margin-bottom: 24px;
`;

export const ContentAvatar = styled(View)`
  padding: 24px;
`;

export const ContainerInfo = styled(View)`
  padding: 10px 24px;
`;

export const Div = styled(View)`
  flex-direction: row;
  align-items: center;
  color: ${theme.colors.common.WHITE};
  padding-bottom: 16px;
`;

export const InfoText = styled(Text)`
  padding-left: 8px;
  color: ${theme.colors.common.WHITE};
`;

export const Map = styled(View)`
  width: 100%;
  margin-top: 10px;
  height: 120px;
  border-radius: 10px;
  background-color: gray;
`;
