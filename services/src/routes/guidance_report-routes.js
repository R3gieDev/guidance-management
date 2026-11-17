const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const rolesController = require("../controller/roles-controller.js");

const router = Router();

router.use(authenticate);

router.get("/", rolesController.createRole);
router.get("/", rolesController.findAllRoles);
router.get("/", rolesController.findRoleById);
router.get("/", rolesController.findRoleByName);
router.put("/:id", rolesController.updateRole);
router.delete("/:id", rolesController.deleteRole);

module.exports = router;
