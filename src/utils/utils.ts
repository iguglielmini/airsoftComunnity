import {Linking} from 'react-native';

export const makePhoneCall = (phoneNumber: string) => {
  if (phoneNumber) {
    Linking.openURL(`tel:${phoneNumber}`).catch(err =>
      console.error('Erro ao abrir o discador', err),
    );
  }
};

export const openWhatsApp = (number: string) => {
  let phoneNumber = number.replace(/[^\d]/g, '');
  if (phoneNumber) {
    if (phoneNumber.length === 10) {
      phoneNumber = '55' + phoneNumber;
    }

    const url = `whatsapp://send?phone=${phoneNumber}`;
    Linking.openURL(url).catch(err => console.error('Erro', err));
  }
};
