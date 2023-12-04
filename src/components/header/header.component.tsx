import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {theme} from '@/styles';
import * as S from './styles';
import ExampleImg from '@/assets/images/introImage.png';
import {useNavigation} from '@react-navigation/native';

interface IHeaderProps {
  gobackIcon?: boolean;
  title?: string;
}

const Header: React.FC<IHeaderProps> = ({
  gobackIcon,
  title = 'Airsoft Community',
}) => {
  const {goBack} = useNavigation();
  return (
    <S.Content>
      <S.Box>
        {gobackIcon ? (
          <TouchableOpacity onPress={() => goBack()}>
            <Icon
              size={24}
              name="arrowleft"
              color={theme.colors.common.WHITE}
            />
          </TouchableOpacity>
        ) : (
          <S.CardUser>
            <S.ImageUser source={ExampleImg} resizeMode="cover" />
          </S.CardUser>
        )}
      </S.Box>
      <S.Box>
        <S.Title>{title}</S.Title>
      </S.Box>
      <S.Box>
        <TouchableOpacity onPress={() => {}} style={{paddingLeft: 10}}>
          <Icon
            size={24}
            name="notification"
            color={theme.colors.common.WHITE}
          />
        </TouchableOpacity>
      </S.Box>
    </S.Content>
  );
};

export default Header;
