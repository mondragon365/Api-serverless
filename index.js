const serverless = require('serverless-http');
const express = require('express');
const app = express();
const AWS = require('aws-sdk');
var translate = new AWS.Translate({ apiVersion: '2017-07-01' });
const BaseService = require('./service');
const Helpert = require('./helpert');
const Router = require('./routes/index');

var router = new Router();
app.use('/', router);

// app.get('/api/peoplee/:id', async function (req, res) {
//   var id = req.params.id;
//   var servicio = new BaseService();
//   var { data } = await servicio.obtener(id);
//   var helpert = new Helpert();
//   var trasn = await helpert.translate_string(data);
//   res.send(trasn);

//   //console.log(dat.data);
//   //res.send(dat.data);


//   // var params = {
//   //   SourceLanguageCode: 'en', /* required */
//   //   TargetLanguageCode: 'es', /* required */
//   //   Text: "name,height,mass,hair color,skin color,eye color,birth year,gender,homeworld,films,species,vehicles,starships,created,edited,url", /* required */
//   // };
//   // translate.translateText(params, function (err, data) {
//   //   console.log(123);
//   //   console.log(data.TranslatedText);
//   //   res.send(data.TranslatedText);
//   // });

//   // var helpert = new Helpert();
//   // var trasn = await helpert.translate_string();
//   // res.send(id);
//   // var servicio = new BaseService();
//   // var dat = await servicio.obtener();
//   // console.log(dat.data);
//   // res.send(dat.data);
// });

// app.get('/api/films/:id', async function (req, res) {
//   var id = req.params.id;
//   var servicio = new BaseService();
//   var { data } = await servicio.obtenerFilms(id);
//   var helpert = new Helpert();
//   var trasn = await helpert.translate_string(data);
//   res.send(trasn);
// })

module.exports.handler = serverless(app);

// exports.handler = (event) => {
//   var params = {
//     SourceLanguageCode: 'en', /* required */
//     TargetLanguageCode: 'it', /* required */
//     Text: 'my text here', /* required */
//   };
//   translate.translateText(params, function(err, data) {
//       console.log(123);
//     console.log(data);
//   });

// };
