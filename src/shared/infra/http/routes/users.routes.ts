import uploadConfig from "@config/upload";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { CreateUserPermissionController } from "@modules/accounts/useCases/createUserPermission/CreateUserPermissionController";
import { CreateUserRoleController } from "@modules/accounts/useCases/createUserRole/CreateUserRoleController";
import { ProfileUserController } from "@modules/accounts/useCases/profileUser/ProfileUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import { Router } from "express";
import multer from "multer";

import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();
const updateUSerAvatarController = new UpdateUserAvatarController();
const createUserRoleController = new CreateUserRoleController();
const createUserPermissionController = new CreateUserPermissionController();
const profileUserController = new ProfileUserController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUSerAvatarController.handle
);

usersRoutes.post("/role", ensureAuthenticated, createUserRoleController.handle);

usersRoutes.post(
  "/permission",
  ensureAuthenticated,
  createUserPermissionController.handle
);

usersRoutes.get("/profile", ensureAuthenticated, profileUserController.handle);

export { usersRoutes };
