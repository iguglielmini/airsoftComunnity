import {theme} from '@/styles';
import {TouchableOpacity, Text, View} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentIntroText = styled(View)`
  margin-top: 16px;
  padding: 16px;
  background-color: ${theme.colors.background.THIRD};
`;

export const IntroText = styled(Text)`
  font-size: 18px;
  color: ${theme.colors.common.WHITE};
`;

export const ButtonText = styled(TouchableOpacity)`
  padding-right: 16px;
`;

export const TextButton = styled(Text)`
  font-size: 14px;
  color: ${theme.colors.primary.MAIN};
  text-decoration: underline;
`;
