const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const guidancesessionController = require("../controller/guidance_sessions-controller.js");

const router = Router();

router.use(authenticate);

router.get("/", guidancesessionController.findAllGuidanceSessions);
router.get("/:id", guidancesessionController.findGuidanceSessionById);
router.get("/:caseRecordId", guidancesessionController.findGuidanceSessionsByCaseRecordId);
router.get("/:staffId", guidancesessionController.findGuidanceSessionsByStaffId);
router.get("/:status", guidancesessionController.findGuidanceSessionsByStatus);
router.get("/:sessionType", guidancesessionController.findGuidanceSessionsByType);
router.post("/", guidancesessionController.createGuidanceSession);
router.put("/:id", guidancesessionController.updateGuidanceSession);
router.delete("/:id", guidancesessionController.deleteGuidanceSession);

module.exports = router;
