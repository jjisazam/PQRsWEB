// Collection class for Tbaprobacionpreguntas entities 
/**
 * 
 */
define([
  'jquery',      
  'underscore',
  'backbone',
  'models/aprobacionPreguntas/aprobacionPreguntasModel'
], function($, _,Backbone, aprobacionPreguntaModel){

var aprobacionPreguntaCollection = Backbone.Collection.extend({
        model: aprobacionPreguntaModel,
        url: "http://localhost:9080/PQRsWEB/webresources/edu.poli.proyecto.test.tbaprobacionpreguntas",
        sync: function (method, model, options) {
            options || (options = {});
            var errorHandler = {
                error: function (jqXHR, textStatus, errorThrown) {
                    // TODO: put your error handling code here
                    // If you use the JS client from the different domain
                    // (f.e. locally) then Cross-origin resource sharing 
                    // headers has to be set on the REST server side.
                    // Otherwise the JS client has to be copied into the
                    // some (f.e. the same) Web project on the same domain
                    alert('Unable to fulfil the request');
                }}
            
            var result = Backbone.sync(method, model, _.extend(options, errorHandler));
            return result;
        }
    });
    
return aprobacionPreguntaCollection;

});