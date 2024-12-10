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
  padding-bottom: 32px;
  color: ${theme.colors.primary.MAIN};
`;

export const ContentForm = styled(View)`
  width: 100%;
  padding: 24px;
  justify-content: flex-start;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${theme.colors.common.WHITE};
`;

export const Redirect1 = styled(TouchableOpacity)`
  padding-top: 16px;
  text-align: center;
  justify-content: center;
  width: 100%;
`;

export const LogoTeam = styled(Image)`
  width: 250px;
  height: 250px;
`;

export const DividerBox = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
