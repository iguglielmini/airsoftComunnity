import styled from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {theme} from '@/styles';

export const Container = styled(View)`
  width: 100%;
  padding-bottom: 16px;
  /* background-color: ${theme.colors.background.MAIN}; */
`;

export const Label = styled(Text)`
  font-size: 16px;
  color: ${theme.colors.primary.MAIN};
  margin-bottom: 8px;
`;

export const SelectButton = styled(TouchableOpacity)`
  background-color: ${theme.colors.primary.MAIN};
  padding: 10px 16px;
  border-radius: 8px;
  align-items: center;
`;

export const ButtonText = styled(Text)`
  font-size: 14px;
  color: ${theme.colors.common.WHITE};
`;

export const SelectedDate = styled(Text)`
  font-size: 14px;
  color: ${theme.colors.primary.MAIN};
  margin-top: 16px;
  font-weight: bold;
`;

export const Box = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
