const { Router } = require("express");
const FilmController = require('../controllers/film.controller');

module.exports = function () {
    const router = Router();
    const filmController = new FilmController();
    router.get("/schema", filmController.getSchema.bind(filmController));
    router.get("/", filmController.getAll.bind(filmController));
    router.get("/:id", filmController.get.bind(filmController));
    return router;
};
