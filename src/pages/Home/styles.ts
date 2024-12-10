import {theme} from '@/styles';
import {View, Text, ScrollView, Image} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  background-color: ${theme.colors.background.MAIN};
`;

export const ContentIntroText = styled(View)`
  margin-top: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  max-width: 50%;
  background-color: ${theme.colors.background.THIRD};
`;

export const IntroText = styled(Text)`
  font-size: 18px;
  color: ${theme.colors.common.WHITE};
`;

export const BoxH = styled(ScrollView)`
  padding-left: 16px;
  padding-top: 16px;
`;

export const BoxV = styled(ScrollView)`
  /* margin-top: -30px; */
  margin-bottom: 24px;
`;

export const ContentUser = styled(View)`
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  flex-direction: row;
`;

export const ContentUserCard = styled(Image)`
  width: 100px;
  height: 100px;
`;

export const ContentUserTitle = styled(Text)`
  color: ${theme.colors.gray.MAIN_3};
  font-size: 18px;
  padding-bottom: 10px;
`;

export const ContentUserInfo = styled(Text)`
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 10px;
  color: ${theme.colors.common.WHITE};
  background-color: ${theme.colors.primary.MAIN};
  margin-right: 8px;
`;

export const StatusUserInfo = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const BoxStatusUserInfo = styled(View)`
  flex-direction: column;
  align-items: flex-start;
`;

export const AccessFastBox = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 16px;
`;
