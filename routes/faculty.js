const router = require("express").Router();
const facultycontroller = require('../controllers/facultyController');
router.post("/",facultycontroller.faculty_create);
router.get("/",facultycontroller.faculty_all);
router.get("/:facultyId",facultycontroller.faculty_details);
router.put("/:facultyId",facultycontroller.faculty_update);
router.delete("/:facultyId",facultycontroller.faculty_delete);







module.exports = router;