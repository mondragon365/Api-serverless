const AWS = require('aws-sdk');
var translate = new AWS.Translate({ apiVersion: '2017-07-01' });

class TransService {
    constructor() {
    }
    async translate_string(obj) {
        var translated_obj = {};
        var arr = [];
        var obj1 = {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "homeworld": "http://swapi.dev/api/planets/1/",
            "films": [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/2/",
                "http://swapi.dev/api/films/3/",
                "http://swapi.dev/api/films/6/"
            ],
            "species": [

            ],
            "vehicles": [
                "http://swapi.dev/api/vehicles/14/",
                "http://swapi.dev/api/vehicles/30/"
            ],
            "starships": [
                "http://swapi.dev/api/starships/12/",
                "http://swapi.dev/api/starships/22/"
            ],
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-20T21:17:56.891000Z",
            "url": "http://swapi.dev/api/people/1/"
        };
        var eng_names = Object.keys(obj);
        arr.push(eng_names);
        eng_names = eng_names.join().replace(/_/g, ' ');
        var params = {
            SourceLanguageCode: 'en', /* required */
            TargetLanguageCode: 'es', /* required */
            Text: eng_names, /* required */
        };
        //
        var data = await miPrimeraPromise(params);
        //

        //var data = await translate.translateText(params);
        var es_names = data.TranslatedText;
        es_names = es_names.replace(/, /g, ',').replace(/ /g, '_').split(',');
        arr.push(es_names);
        arr[0].forEach((element, index) => {
            translated_obj[arr[1][index]] = obj[element];
        });
        //return (arr[1].join());
        return (translated_obj);

        // translate.translateText(params, function (err, data) {
        //     var es_names = data.TranslatedText;
        //     es_names = es_names.replace(/, /g, ',').replace(/ /g, '_').split(',');
        //     arr.push(es_names);
        //     arr[0].forEach(element, index => {
        //         translated_obj[arr[1][index]] = obj[element];
        //     });
        //     return (translated_obj);
        // });
    }
}
// let miPrimeraPromise = new Promise((resolve, reject) => {
//     translate.translateText(params, function (err, data) {
//         resolve(data);
//     });
//     // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
//     // En este ejemplo, usamos setTimeout(...) para simular código asíncrono. 
//     // En la vida real, probablemente uses algo como XHR o una API HTML5.
//     // setTimeout(function () {
//     //     resolve("¡Éxito!"); // ¡Todo salió bien!
//     // }, 250);
// });

var miPrimeraPromise = function (params) {
    return new Promise(function (resolve, reject) {
        translate.translateText(params, function (err, data) {
            resolve(data);
        });
    });
}

module.exports = TransService;




