import React from 'react';

import * as S from './styles';

interface ITextIntroProps {
  title: string;
  redirect?: () => void;
  hasList?: boolean;
}

const TextIntro: React.FC<ITextIntroProps> = ({title, redirect, hasList}) => {
  return (
    <S.Container>
      <S.ContentIntroText>
        <S.IntroText>{title}</S.IntroText>
      </S.ContentIntroText>
      {hasList && (
        <S.ButtonText onPress={redirect}>
          <S.TextButton>Saiba mais</S.TextButton>
        </S.ButtonText>
      )}
    </S.Container>
  );
};

export default TextIntro;
