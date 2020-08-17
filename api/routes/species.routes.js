const { Router } = require("express");
const SpecieController = require('../controllers/specie.controller');

module.exports = function () {
    const router = Router();
    const specieController = new SpecieController();
    router.get("/schema", specieController.getSchema.bind(specieController));
    router.get("/", specieController.getAll.bind(specieController));
    router.get("/:id", specieController.get.bind(specieController));
    return router;
};
