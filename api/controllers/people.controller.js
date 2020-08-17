const ExternalService = require('../../services/external.service');
const TranslateHelper = require('../../helpers/translate.helper');


class PeopleController {
    constructor() {
        this._externalService = new ExternalService();
        this._translateHelper = new TranslateHelper();
    }

    async getAll(req, res) {

        var { data } = await this._externalService.getAll('people');
        if (!data) {
            return res.status(404).send();
        }
        var person = await this._translateHelper.translate_string(data);
        return res.send(person);
    }

    async get(req, res) {
        const { id } = req.params;

        var { data } = await this._externalService.get('people', id);
        if (!data) {
            return res.status(404).send();
        }
        var person = await this._translateHelper.translate_string(data);
        return res.send(person);
    }

    async getSchema(req, res) {

        var { data } = await this._externalService.getSchema('people');
        if (!data) {
            return res.status(404).send();
        }
        var person = await this._translateHelper.translate_string(data);
        return res.send(person);
    }
}

module.exports = PeopleController;

// const mapper = require("automapper-js");
// const { CourseDto } = require("../dtos");

// class CourseController {
//     constructor({ CourseService }) {
//         this._courseService = CourseService;
//     }

//     async getCourses(req, res) {
//         let courses = await this._courseService.getAll();
//         courses = courses.map(course => mapper(CourseDto, course));
//         return res.send({
//             payload: courses
//         });
//     }

//     async getCourse(req, res) {
//         const { id } = req.params;
//         let course = await this._courseService.get(id);
//         if (!course) {
//             return res.status(404).send();
//         }
//         course = mapper(CourseDto, course);
//         return res.send({
//             payload: course
//         });
//     }
// }

// module.exports = CourseController;
