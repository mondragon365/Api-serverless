const { Router } = require("express");
const VehicleController = require('../controllers/vehicle.controller');

module.exports = function () {
    const router = Router();
    const vehicleController = new VehicleController();
    router.get("/schema", vehicleController.getSchema.bind(vehicleController));
    router.get("/", vehicleController.getAll.bind(vehicleController));
    router.get("/:id", vehicleController.get.bind(vehicleController));
    return router;
};
