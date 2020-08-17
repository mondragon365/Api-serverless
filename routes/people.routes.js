const { Router } = require("express");
const PeopleController = require('../controllers/people.controller');

module.exports = function () {
    const router = Router();
    const peopleController = new PeopleController();
    //router.get("/", CourseController.getCourses.bind(CourseController));
    router.get("/:id", peopleController.get.bind(peopleController));
    // router.get("/:id", function (req, res) {
    //     res.send('Hello from A!');
    // });



    return router;
};
