const AWS = require('aws-sdk');
var translate = new AWS.Translate({ apiVersion: '2017-07-01' });

class TranslateHelper {
    constructor() {
    }
    async translate_string(obj) {
        var translated_obj = {};
        var arr = [];
        var eng_names = Object.keys(obj);
        arr.push(eng_names);
        eng_names = eng_names.join().replace(/_/g, ' ');
        var params = {
            SourceLanguageCode: 'en', /* required */
            TargetLanguageCode: 'es', /* required */
            Text: eng_names, /* required */
        };

        var data = await translatePromise(params);

        var es_names = data.TranslatedText;
        es_names = es_names.replace(/, /g, ',').replace(/ /g, '_').split(',');
        arr.push(es_names);
        arr[0].forEach((element, index) => {
            translated_obj[arr[1][index]] = obj[element];
        });
        return (translated_obj);
    }
}
var translatePromise = function (params) {
    return new Promise(function (resolve, reject) {
        translate.translateText(params, function (err, data) {
            resolve(data);
        });
    });
}
module.exports = TranslateHelper;