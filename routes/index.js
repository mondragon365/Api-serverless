const { Router } = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const compression = require("compression");
const PeopleRoutes = require('./people.routes');


module.exports = function () {
    const router = Router();
    const apiRoute = Router();
    const peopleRoutes = new PeopleRoutes();

    // apiRoute
    //     .use(cors())
    //     .use(bodyParser.json())
    //     .use(compression());

    apiRoute.use("/people", peopleRoutes);

    //apiRoute.use("/films", FilmsRoutes);
    router.use("/api", apiRoute);

    return router;
};
