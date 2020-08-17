const { Router } = require("express");
const UserRoutes = require('./user.routes');
const PeopleRoutes = require('./people.routes');
const FilmRoutes = require('./film.routes');
const PlanetsRoutes = require('./planet.routes');
const SpeciesRoutes = require('./species.routes');
const StarshipsRoutes = require('./starships.routes');
const VehiclesRoutes = require('./vehicles.routes');

module.exports = function () {
    const router = Router();
    const apiRoute = Router();
    const userRoutes = new UserRoutes();
    const peopleRoutes = new PeopleRoutes();
    const filmRoutes = new FilmRoutes();
    const planetsRoutes = new PlanetsRoutes();
    const speciesRoutes = new SpeciesRoutes();
    const starshipsRoutes = new StarshipsRoutes();
    const vehiclesRoutes = new VehiclesRoutes();

    apiRoute.use("/user", userRoutes);
    apiRoute.use("/people", peopleRoutes);
    apiRoute.use("/films", filmRoutes);
    apiRoute.use("/planets", planetsRoutes);
    apiRoute.use("/species", speciesRoutes);
    apiRoute.use("/starships", starshipsRoutes);
    apiRoute.use("/vehicles", vehiclesRoutes);

    router.use("/api", apiRoute);

    return router;
};
