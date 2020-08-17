const { Router } = require("express");
const PlanetController = require('../controllers/planet.controller');

module.exports = function () {
    const router = Router();
    const planetController = new PlanetController();
    router.get("/schema", planetController.getSchema.bind(planetController));
    router.get("/", planetController.getAll.bind(planetController));
    router.get("/:id", planetController.get.bind(planetController));
    return router;
};
