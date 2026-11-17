const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const studentsController = require("../controller/students-controller.js");

const router = Router();

router.use(authenticate);

router.post("/", studentsController.createStudent);
router.get("/", studentsController.findAllStudents);
router.get("/:id", studentsController.findStudentById);
router.get("/:gradeSectionId", studentsController.findStudentsByGradeSectionId);
router.get("/:accountId", studentsController.findStudentByAccountId);
router.get("/:lastname", studentsController.findStudentsByLastname);
router.get("/:name", studentsController.findStudentsByName);
router.put("/:id", studentsController.updateStudent);
router.delete("/:id", studentsController.deleteStudent);

module.exports = router;
