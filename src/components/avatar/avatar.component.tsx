import React from 'react';
import {View} from 'react-native';
import ExampleImg from '@/assets/images/introImage.png';

import * as S from './styles';

interface IAvatar {
  name?: string;
  lastName?: string;
}

const Avatar: React.FC<IAvatar> = ({name, lastName}) => {
  return (
    <S.Container>
      <S.AvatarContent>
        <S.Avatar source={ExampleImg} resizeMode="cover" />
      </S.AvatarContent>
      <S.Box>
        <S.TextName>
          {name} {lastName}
        </S.TextName>
        <S.EditProfile>
          <S.EditText>Editar</S.EditText>
        </S.EditProfile>
      </S.Box>
    </S.Container>
  );
};

export default Avatar;
