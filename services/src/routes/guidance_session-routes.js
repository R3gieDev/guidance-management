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
router.put("/:id", guidanceSessionController.updateGuidanceSession);
router.delete("/:id", guidanceSessionController.deleteGuidanceSession);

module.exports = router;
