import { PermissionsRepository } from "@modules/accounts/infra/typeorm/repositories/PermissionsRepository";
import { RolesReposiotry } from "@modules/accounts/infra/typeorm/repositories/RolesRepository";
import { UsersPermissionsRepository } from "@modules/accounts/infra/typeorm/repositories/UsersPermissionsRepository";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { UsersRolesRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRolesRepository";
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokensRepository";
import { IPermissionsRepository } from "@modules/accounts/repositories/IPermissionsRepository";
import { IRolesRepository } from "@modules/accounts/repositories/IRolesRepository";
import { IUsersPermissionsRepository } from "@modules/accounts/repositories/IUsersPermissionsRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IUsersRolesRepository } from "@modules/accounts/repositories/IUsersRolesRepository";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarRepository";
import { CarsImagesRepostory } from "@modules/cars/infra/typeorm/repositories/CarsImagesRepostory";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { RentalsRepository } from "@modules/rentals/infra/typeorm/repositories/RentalsRepository";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { container } from "tsyringe";

import "@shared/container/providers";

container.registerSingleton<IPermissionsRepository>(
  "PermissionsRepository",
  PermissionsRepository
);

container.registerSingleton<IRolesRepository>(
  "RolesRepository",
  RolesReposiotry
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);

container.registerSingleton<IUsersRolesRepository>(
  "UsersRolesRepository",
  UsersRolesRepository
);

container.registerSingleton<IUsersPermissionsRepository>(
  "UsersPermissionsRepository",
  UsersPermissionsRepository
);

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);

container.registerSingleton<ICarsImagesRepository>(
  "CarsImagesRepostory",
  CarsImagesRepostory
);

container.registerSingleton<IRentalsRepository>(
  "RentalsRepository",
  RentalsRepository
);
