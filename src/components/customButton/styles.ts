import {theme} from '@/styles';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

interface ButtonCustomProps {
  size?: 'lg' | 'sm' | 'xs';
}

export const ButtonCustom = styled(TouchableOpacity)<ButtonCustomProps>`
  background-color: ${theme.colors.primary.MAIN};
  padding: 16px 24px;
  border-radius: 8px;
  width: ${({size}) => {
    switch (size) {
      case 'lg':
        return '100%';
      case 'sm':
        return '200px';
      case 'xs':
        return 'auto';
      default:
        return '200px';
    }
  }};
`;

export const TitleButton = styled(Text)<ButtonCustomProps>`
  text-align: center;
  font-weight: bold;
  color: ${theme.colors.secondary.MAIN};
  font-size: ${({size}) => {
    switch (size) {
      case 'lg':
        return '16px';
      case 'sm':
        return '14px';
      case 'xs':
        return '12px';
      default:
        return '16px';
    }
  }};
`;
