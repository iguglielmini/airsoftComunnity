import React from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {theme} from '@/styles';
import * as S from './styles';
import ExampleImg from '@/assets/images/team.png';
import {useNavigation} from '@react-navigation/native';
import {IHeaderProps} from '@/types';

const Header: React.FC<IHeaderProps> = ({
  gobackIcon,
  title = 'Squad Stryker',
}) => {
  const {goBack, navigate} = useNavigation();
  return (
    <S.Content>
      <S.Box>
        <S.Box>
          {gobackIcon ? (
            <TouchableOpacity testID="goback-icon" onPress={() => goBack()}>
              <Icon
                size={24}
                name="arrowleft"
                color={theme.colors.common.WHITE}
              />
            </TouchableOpacity>
          ) : (
            <S.CardUser onPress={() => navigate('Profile')}>
              <S.ImageUser
                testID="user-image"
                source={ExampleImg}
                resizeMode="cover"
              />
            </S.CardUser>
          )}
        </S.Box>
        <S.Title>{title}</S.Title>
      </S.Box>
      <S.Box>
        <TouchableOpacity
          testID="notification-icon"
          onPress={() => {}}
          style={{paddingLeft: 10}}>
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
