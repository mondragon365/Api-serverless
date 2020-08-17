const { Router } = require("express");
const UserController = require('../controllers/user.controller');

module.exports = function () {
    const router = Router();
    const userController = new UserController();
    router.get("/", userController.getAll.bind(userController));
    router.get("/:id", userController.get.bind(userController));
    router.post("/", userController.create.bind(userController));
    return router;
};
