const { Router } = require("express");
const StarshipController = require('../controllers/starship.controller');

module.exports = function () {
    const router = Router();
    const starshipController = new StarshipController();
    router.get("/schema", starshipController.getSchema.bind(starshipController));
    router.get("/", starshipController.getAll.bind(starshipController));
    router.get("/:id", starshipController.get.bind(starshipController));
    return router;
};
