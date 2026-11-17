const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const guidancereportController = require("../controller/guidance_report-controller.js");

const router = Router();

router.use(authenticate);

router.post("/", guidancereportController.createGuidanceReport);
router.get("/", guidancereportController.findAllGuidanceReports);
router.get("/:id", guidancereportController.findGuidanceReportById);
router.get("/:staffId", guidancereportController.findGuidanceReportsByStaffId);
router.get("/:reportType", guidancereportController.findGuidanceReportsByType);
router.put("/:id", guidancereportController.updateGuidanceReport);
router.delete("/:id", guidancereportController.deleteGuidanceReport);

module.exports = router;
