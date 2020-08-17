
class PeopleController {
    constructor() {
    }

    async get(req, res) {
        const { id } = req.params;
        // let course = await this._courseService.get(id);
        // if (!course) {
        //     return res.status(404).send();
        // }
        // course = mapper(CourseDto, course);
        return res.send({
            payload: id
        });
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
