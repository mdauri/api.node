import { CreateRoleController } from "@modules/accounts/useCases/createRole/CreateRoleController";
import { Router } from "express";

const roleRoutes = Router();

const createRoleController = new CreateRoleController();

roleRoutes.post("/", createRoleController.handle);

export { roleRoutes };
