interface IAuthData {
  logged: boolean;
}

interface IUser {
  name: string;
  cpf: string;
  language?: ILanguage;
}

export {IAuthData, IUser};
