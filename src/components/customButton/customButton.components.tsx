import React from 'react';

import * as S from './styles';
import {ButtonProps} from 'react-native';

const CustomButton: React.FC<ButtonProps> = ({onPress, title, size}) => {
  return (
    <S.ButtonCustom size={size} onPress={onPress}>
      <S.TitleButton size={size}>{title}</S.TitleButton>
    </S.ButtonCustom>
  );
};

export default CustomButton;
