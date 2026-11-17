const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const gradeSectionController = require("../controller/grade_sections-controller.js");

const router = Router();

router.use(authenticate);

router.post("/", gradeSectionController.createGradeSection);
router.get("/", gradeSectionController.findAllGradeSections);
router.get("/id", gradeSectionController.findGradeSectionById);
router.get("/schoolYearId", gradeSectionController.findGradeSectionsBySchoolYear);
router.get("/gradeNStrandId", gradeSectionController.findGradeSectionsByGradeNStrand);
router.get("/adviserStaffId", gradeSectionController.findGradeSectionsByAdviser);
router.get("/", gradeSectionController.findGradeSection);
router.put("/:id", gradeSectionController.updateGradeSection);
router.delete("/:id", gradeSectionController.deleteGradeSection);

module.exports = router;
