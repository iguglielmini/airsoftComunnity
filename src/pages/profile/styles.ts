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

export const ContentStats = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${theme.colors.background.SECOND};
  padding: 24px;
  border: 1px solid ${theme.colors.primary.MAIN};
  margin-left: 24px;
  margin-right: 24px;
  border-radius: 30px;
`;

export const StatsTitle = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.common.WHITE};
`;

export const StatsText = styled(Text)`
  font-size: 14px;
  padding-top: 8px;
  color: ${theme.colors.common.WHITE};
`;

export const StatsDiv = styled(View)`
  flex-direction: column;
  align-items: center;
`;
