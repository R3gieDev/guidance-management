const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const caserecordsController = require("../controller/case-records-controller.js");

const router = Router();

router.use(authenticate);

router.post("/", caserecordsController.createCaseRecord);
router.get("/", caserecordsController.findAllCaseRecords);
router.get("/:id", caserecordsController.findCaseRecordById);
router.get("/:studentId", caserecordsController.findCaseRecordsByStudentId);
router.get("/:concernId", caserecordsController.findCaseRecordsByConcernId);
router.get("/:openedBy", caserecordsController.findCaseRecordsByOpenedBy);
router.get("/:status", caserecordsController.findCaseRecordsByStatus);
router.get("/:priority", caserecordsController.findCaseRecordsByPriority);
router.put("/:id", caserecordsController.updateCaseRecord);
router.delete("/:id", caserecordsController.deleteCaseRecord);

module.exports = router;
