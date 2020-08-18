const { Router } = require("express");
const PeopleController = require('../controllers/people.controller');

module.exports = function () {
    const router = Router();
    const peopleController = new PeopleController();
    router.get("/schema", peopleController.getSchema.bind(peopleController));
    router.get("/", peopleController.getAll.bind(peopleController));
    router.get("/:id", peopleController.get.bind(peopleController));

    return router;
};
