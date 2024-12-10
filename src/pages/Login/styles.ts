import {theme} from '@/styles';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background.MAIN};
`;

export const ContentLogo = styled(View)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const TitleLogo = styled(Text)`
  font-size: 32px;
  font-weight: 800;
  text-align: center;
  padding-bottom: 24px;
  color: ${theme.colors.primary.MAIN};
`;

export const SubtitleLogo = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.primary.MAIN};
`;

export const ContentForm = styled(View)`
  display: flex;
  width: 100%;
  padding: 24px;
  justify-content: flex-start;
  background-color: white;
  flex: 1;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

export const ContentOpt = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 32px;
`;

export const Redirect1 = styled(TouchableOpacity)``;

export const LogoTeam = styled(Image)`
  width: 350px;
  height: 350px;
`;

export const RegisterBox = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 32px;
`;

export const RegisterText = styled(Text)`
  font-size: 14px;
  line-height: 20px;
  padding-right: 8px;
  color: ${theme.colors.gray.MAIN_4};
`;
