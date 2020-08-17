const { Router } = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const compression = require("compression");
const PeopleRoutes = require('./people.routes');
const FilmRoutes = require('./film.routes');
const UserRoutes = require('./user.routes');


module.exports = function () {
    const router = Router();
    const apiRoute = Router();
    const peopleRoutes = new PeopleRoutes();
    const filmRoutes = new FilmRoutes();
    const userRoutes = new UserRoutes();

    // apiRoute
    //     .use(cors())
    //     .use(bodyParser.json())
    //     .use(compression());

    apiRoute.use("/people", peopleRoutes);
    apiRoute.use("/films", filmRoutes);
    apiRoute.use("/user", userRoutes);

    router.use("/api", apiRoute);

    return router;
};
