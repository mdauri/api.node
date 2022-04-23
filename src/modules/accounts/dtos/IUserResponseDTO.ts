interface IUserReponseDTO {
  email: string;
  name: string;
  id: string;
  avatar: string;
  avatar_url(): string;
  permissions: string[];
  roles: string[];
}

export { IUserReponseDTO };
