const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const staffController = require("../controller/staff-controller.js");

const router = Router();

router.use(authenticate);

router.post("/", staffController.createStaff);
router.get("/:", staffController.findAllStaffs);
router.get("/:id", staffController.findStaffById);
router.get("/:accountId", staffController.findStaffByAccountId);
router.get("/:email", staffController.findStaffByEmail);
router.put("/:id", staffController.updateStaff);
router.delete("/:id", staffController.deleteStaff.apply);

module.exports = router;
