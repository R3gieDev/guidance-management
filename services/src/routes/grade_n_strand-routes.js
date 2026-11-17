const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const gradeNStrandController = require("../controller/grade_n_strand-controller.js");

const router = Router();

router.use(authenticate);

router.post("/", gradeNStrandController.createGradeNStrand);
router.get("/", gradeNStrandController.findAllGradeNStrands);
router.get("/:id", gradeNStrandController.findGradeNStrandById);
router.put("/:id", gradeNStrandController.updateGradeNStrand);
router.delete("/:id", gradeNStrandController.deleteGradeNStrand);

module.exports = router;
