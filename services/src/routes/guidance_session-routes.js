const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const guidanceSessionController = require("../controller/guidance_sessions-controller.js");

const router = Router();

router.use(authenticate);

router.get("/", guidanceSessionController.createGuidanceSession);
router.get("/", guidanceSessionController.findAllGuidanceSessions);
router.get("/id", guidanceSessionController.findGuidanceSessionById);
router.get("/caseRecordId", guidanceSessionController.findGuidanceSessionsByCaseRecordId);
router.get("/staffId", guidanceSessionController.findGuidanceSessionsByStaffId);
router.get("/status", guidanceSessionController.findGuidanceSessionsByStatus);
router.get("/sessionType", guidanceSessionController.findGuidanceSessionsByType);
router.get("/id", guidanceSessionController.findSchoolYearByYear);
router.put("/:id", guidanceSessionController.updateSchoolYear);
router.delete("/:id", guidanceSessionController.deleteSchoolYear);

module.exports = router;
