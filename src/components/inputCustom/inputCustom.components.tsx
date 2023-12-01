import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

import * as S from './styles';

interface InputCustomProps extends TextInputProps {
  type: 'text' | 'number' | 'password';
}

const InputCustom: React.FC<InputCustomProps> = ({type, ...rest}) => {
  let keyboardType: TextInputProps['keyboardType'] = 'default';
  let secureTextEntry = false;

  if (type === 'number') {
    keyboardType = 'numeric';
  } else if (type === 'password') {
    secureTextEntry = true;
  }

  return (
    <S.CustomInput
      {...rest}
      placeholderTextColor="#fff"
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  );
};

export default InputCustom;
