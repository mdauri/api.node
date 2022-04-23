import auth from "@config/auth";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { sign, verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
  email: string;
}

interface ITokenResponse {
  token: string;
  refresh_token: string;
}

@injectable()
class RefreshTokenUseCase {
  constructor(
    @inject("UsersTokensRepository")
    private userstokensRepository: IUsersTokensRepository,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("DayJsDateProvider")
    private dayjsDateProvider: IDateProvider
  ) {}
  async execute(token: string): Promise<ITokenResponse> {
    const { email, sub } = verify(token, auth.secret_refresh_token) as IPayload;

    const user_id = sub;

    const userToken =
      await this.userstokensRepository.findByUserIdAndRefreshToken(
        user_id,
        token
      );

    if (!userToken) {
      throw new AppError("Refresh Token does not exists");
    }

    await this.userstokensRepository.deleteById(userToken.id);

    const user = await this.usersRepository.findById(user_id);

    const expires_date = this.dayjsDateProvider.addDays(
      auth.expires_refresh_token_days
    );

    const refresh_token = sign(
      {
        email,
      },
      auth.secret_refresh_token,
      {
        subject: sub,
        expiresIn: auth.expires_in_refresh_token,
      }
    );

    await this.userstokensRepository.create({
      expires_date,
      refresh_token,
      user_id,
    });

    const newToken = sign(
      {
        permissions: user.permissions.map(
          (permission) => permission.permission_id
        ),
        roles: user.roles.map((role) => role.role_id),
      },
      auth.secret_token,
      {
        subject: userToken.id,
        expiresIn: auth.expires_in_token,
      }
    );

    return {
      refresh_token,
      token: newToken,
    };
  }
}

export { RefreshTokenUseCase };
