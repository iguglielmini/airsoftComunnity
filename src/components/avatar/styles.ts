import {theme} from '@/styles';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const AvatarContent = styled(View)`
  width: 80px;
  height: 80px;
  border: 1px;
  border-radius: 10px;
`;

export const Avatar = styled(Image)`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  border-color: ${theme.colors.primary.MAIN};
`;

export const Box = styled(View)`
  flex-direction: column;
  padding-top: 10px;
  padding-left: 10px;
`;

export const TextName = styled(Text)`
  font-size: 21px;
  color: ${theme.colors.common.WHITE};
  font-weight: bold;
`;

export const TextSub = styled(Text)`
  font-size: 14px;
  color: ${theme.colors.common.WHITE};
  padding-top: 8px;
  font-weight: 400;
`;

export const TextTel = styled(Text)`
  font-size: 14px;
  color: ${theme.colors.common.WHITE};
  font-weight: 400;
  padding-top: 8px;
`;

export const EditText = styled(Text)`
  font-size: 12px;
  color: ${theme.colors.primary.MAIN};
  font-weight: 400;
  text-align: center;
`;

export const EditProfile = styled(TouchableOpacity)`
  border: 1px solid ${theme.colors.primary.MAIN};
  color: red;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  text-align: center;
`;
