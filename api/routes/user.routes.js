const { Router } = require("express");
const UserController = require('../controllers/user.controller');

module.exports = function () {
    const router = Router();
    const userController = new UserController();
    router.get("/:id", userController.get.bind(userController));
    router.post("/", userController.create.bind(userController));
    //router.get("/:id", peopleController.get.bind(peopleController));
    // router.get("/:id", function (req, res) {
    //     res.send('Hello from A!');
    // });



    return router;
};
