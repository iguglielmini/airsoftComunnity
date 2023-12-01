import {theme} from '@/styles';
import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background.MAIN};
  padding: 24px;
`;

export const ContentLogo = styled(View)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const TitleLogo = styled(Text)`
  font-size: 32px;
  font-weight: 800;
  color: ${theme.colors.common.WHITE};
`;

export const SubtitleLogo = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.primary.MAIN};
`;

export const ContentForm = styled(View)`
  display: flex;
  width: 100%;
  padding-top: 16px;
  align-items: center;
  justify-content: flex-start;
`;

export const ContentOpt = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Redirect1 = styled(TouchableOpacity)`
  padding-top: 16px;
`;
