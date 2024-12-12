import React from 'react';
import {Header, TextIntro, Ticket} from '@/components';
import ExampleImg from '@/assets/images/firezone.png';

import * as S from './styles';

const CouponPage: React.FC = () => {
  return (
    <S.Container>
      <Header title="Cupons" gobackIcon />
      <S.BoxV>
        <TextIntro title="Cupons Disponíveis" />
        <S.Box>
          <Ticket
            logo={ExampleImg}
            company="Firezone Airsoft"
            value="10%"
            couponText="OFF"
            validity="Válido até Janeiro de 2025"
            redirect={() => {}}
          />
          <Ticket
            logo={ExampleImg}
            company="Qg do Patch"
            value="5%"
            couponText="OFF"
            validity="Válido à partir de 30 patchs"
            redirect={() => {}}
          />

          <Ticket
            logo={ExampleImg}
            company="WT Airsoft Store"
            value="20%"
            couponText="OFF"
            validity="Válido para compras à vista"
            redirect={() => {}}
          />
          <Ticket
            logo={ExampleImg}
            company="Firezone Airsoft"
            value="20%"
            couponText="OFF"
            validity="Válido para compras de AEG"
            redirect={() => {}}
          />
          <Ticket
            logo={ExampleImg}
            company="Qg do Patch"
            value="5%"
            couponText="OFF"
            validity="Válido à partir de 30 patchs"
            redirect={() => {}}
          />
        </S.Box>
      </S.BoxV>
    </S.Container>
  );
};

export default CouponPage;
