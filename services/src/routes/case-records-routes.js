const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const caserecordsController = require("../controller/case-records-controller.js");

const router = Router();

router.use(authenticate);

router.post("/", caserecordController.createCaseRecords);
router.get("/", caserecordController.findAllCaseRecords);
router.get("/:id", caserecordsController.findCaseRecordsById);
router.get("/:studentId", caserecordsController.findCaseRecordsByStudentById);
router.get("/:concernId", caserecordsController.findCaseRecordsByConcernId);
router.get("/:openedBy", caserecordsController.findCaseRecordsByOpenedBy);
router.get("/:status", caserecordsController.findCaseRecordsByStatus);
router.get("/:priority", caserecordsController.findCaseRecordsByPriority);
router.put("/:id", caserecordsController.updateCaseRecords);
router.delete("/:id", caserecordsController.deleteCaseRecords);

module.exports = router;
