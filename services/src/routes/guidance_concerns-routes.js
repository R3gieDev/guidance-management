const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const guidanceconcernsController = require("../controller/guidance_concerns-controller.js");

const router = Router();

router.use(authenticate);

router.get("/", guidanceconcernsController.findAllGuidanceConcerns);
router.get("/:id", guidanceconcernsController.findGuidanceConcernById);
router.get("/:name", guidanceconcernsController.findGuidanceConcernByName);
router.get("/", guidanceconcernsController.findActiveGuidanceConcerns);
router.get("/", guidanceconcernsController.findInactiveGuidanceConcerns);
router.post("/", guidanceconcernsController.createGuidanceConcern);
router.put("/:id", guidanceconcernsController.updateGuidanceConcern);
router.delete("/:id", guidanceconcernsController.deleteGuidanceConcern);

module.exports = router;
