const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const appointsmentController = require("../controller/appoinments-controller.js");

const router = Router();

router.use(authenticate);

router.post("/", appointsmentController.createAppointment);
router.get("/", appointsmentController.findAllAppointments);
router.get("/:id", appointsmentController.findAppointmentById);
router.get("/:studentId", appointsmentController.findAppointmentsByStudentId);
router.get("/:staffId", appointsmentController.findAppointmentsByStaffId);
router.put("/:id", appointsmentController.updateAppointment);
router.delete("/:id", appointsmentController.deleteAppointment);

module.exports = router;
