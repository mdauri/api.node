import { CreatePermissionController } from "@modules/accounts/useCases/createPermission/CreatePermissionController";
import { Router } from "express";

const permissionRoutes = Router();

const createPermissionController = new CreatePermissionController();

permissionRoutes.post("/", createPermissionController.handle);

export { permissionRoutes };
