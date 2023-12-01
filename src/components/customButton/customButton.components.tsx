import React from 'react';

import * as S from './styles';

interface ButtonProps {
  onPress: () => void;
  title: string;
  color?: string;
  borderColor?: string;
  size: 'lg' | 'sm' | 'xs';
}

const CustomButton: React.FC<ButtonProps> = ({onPress, title, size}) => {
  return (
    <S.ButtonCustom size={size} onPress={onPress}>
      <S.TitleButton size={size}>{title}</S.TitleButton>
    </S.ButtonCustom>
  );
};

export default CustomButton;
