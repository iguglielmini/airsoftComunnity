interface ICardGun {
  gunName: string;
  typeGun: string;
  brandImage?: string;
  gunImage?: string;
  detailsButton: () => void;
  deleteButton: () => void;
}

export {ICardGun};
