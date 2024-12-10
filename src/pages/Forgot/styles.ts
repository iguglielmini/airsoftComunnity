import {theme} from '@/styles';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.background.MAIN};
`;

export const ContentLogo = styled(View)`
  flex: auto;
  align-items: center;
  justify-content: center;
`;

export const TitleLogo = styled(Text)`
  font-size: 32px;
  font-weight: 800;
  color: ${theme.colors.primary.MAIN};
`;

export const SubtitleLogo = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.primary.MAIN};
  padding-bottom: 24px;
`;

export const ContentForm = styled(View)`
  display: flex;
  width: 100%;
  height: 400px;
  padding: 24px;
  justify-content: flex-start;
  background-color: ${theme.colors.common.WHITE};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
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

export const LogoTeam = styled(Image)`
  width: 350px;
  height: 350px;
`;
