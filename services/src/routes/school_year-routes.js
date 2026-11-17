const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const schoolYearController = require("../controller/school_years-controller.js");

const router = Router();

router.use(authenticate);

router.post("/", schoolYearController.createSchoolYear);
router.get("/", schoolYearController.findAllSchoolYears);
router.get("/id", schoolYearController.findSchoolYearById);
router.get("/schoolYear", schoolYearController.findSchoolYearByYear);
router.put("/:id", schoolYearController.updateSchoolYear);
router.delete("/:id", schoolYearController.deleteSchoolYear);

module.exports = router;
