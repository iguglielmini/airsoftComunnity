import {theme} from '@/styles';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(ScrollView)`
  flex: 1;
  background-color: ${theme.colors.background.MAIN};
`;

export const BoxV = styled(ScrollView)`
  margin-bottom: 24px;
`;

export const Box = styled(View)`
  margin-top: -30px;
`;

export const ContentInfo = styled(View)`
  padding: 24px 16px;
`;

export const ContentDescribe = styled(View)`
  padding-bottom: 8px;
`;

export const IntroText = styled(Text)`
  font-size: 18px;
  color: ${theme.colors.primary.MAIN};
`;

export const IntroSubText = styled(Text)`
  font-size: 12px;
  padding-top: 8px;
  color: ${theme.colors.common.WHITE};
`;
export const TextDescribe = styled(Text)`
  font-size: 12px;
  line-height: 18px;
  padding: 16px;
  color: ${theme.colors.common.WHITE};
`;

export const TextPrice = styled(Text)`
  font-size: 21px;
  padding-top: 8px;
  font-weight: bold;
  color: ${theme.colors.primary.MAIN};
`;

export const BoxRow = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentImageUsers = styled(View)`
  padding-top: 8px;
  padding-bottom: 10px;
  padding-right: 18px;
  flex-direction: row;
`;
export const ContentGeneralUser = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 16px;
`;

export const Divider = styled(View)`
  width: 100%;
  height: 1px;
  margin-top: 16px;
  background-color: ${theme.colors.primary.MAIN};
`;

export const ContentContact = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
`;

export const ButtonIcon = styled(TouchableOpacity)`
  background-color: ${theme.colors.background.BLACK_500};
  padding: 10px;
  border-radius: 10px;
  margin-right: 8px;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const InfoIcon = styled(View)`
  flex-direction: row;
  align-items: center;
`;
