interface ICardEventProps {
  image?: string;
  titleEvent: string;
  calendario: string;
  locationUF: string;
  detailsPress?: () => void;
}

interface ICardProduct {
  image?: string;
  titleEvent: string;
  detailsPress?: () => void;
}

interface ICardStore {
  image?: string;
  titleEvent: string;
  endereco: string;
  telefone: string;
  wpp: string;
  detailsPress?: () => void;
  mapsOpen?: () => void;
}

interface ICardUser {
  name?: string;
  type?: string;
  image?: string;
  hasInfoUser?: boolean;
}

interface ButtonProps {
  onPress: () => void;
  title: string;
  color?: string;
  borderColor?: string;
  size: 'lg' | 'sm' | 'xs';
}

interface IFloatButtonProps {
  hasParticipant?: boolean;
  titleButton: string;
  redirect: () => void;
  loading?: boolean;
  date?: string;
  hour?: string;
}

interface IHeaderProps {
  gobackIcon?: boolean;
  title?: string;
}

interface ISectionImage {
  title?: string;
  subtitle?: string;
  sizeHeight: 'lg' | 'md' | 'sm';
}

interface ITextIntroProps {
  title: string;
  redirect?: () => void;
  hasList?: boolean;
}

interface IEventCardProps {
  onClick?: () => void;
  title: string;
  subtitle: string;
  date: string;
  imageCard?: string;
  cardHorizontal?: boolean;
}

interface CheckboxProps {
  label: string;
  onValueChange: (value: boolean) => void;
}

export {
  ICardEventProps,
  ICardStore,
  ICardProduct,
  ICardUser,
  ButtonProps,
  IFloatButtonProps,
  IHeaderProps,
  ISectionImage,
  ITextIntroProps,
  IEventCardProps,
  CheckboxProps,
};
