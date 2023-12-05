interface ICardEventProps {
  image?: string;
  titleEvent: string;
  calendario: string;
  locationUF: string;
  detailsPress?: () => void;
}

interface ICardEventProps {
  image?: string;
  titleEvent: string;
  detailsPress?: () => void;
}

interface ICardEventProps {
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

export {
  ICardEventProps,
  ICardEventProps,
  ICardEventProps,
  ICardUser,
  ButtonProps,
  IFloatButtonProps,
  IHeaderProps,
  ISectionImage,
  ITextIntroProps,
};
