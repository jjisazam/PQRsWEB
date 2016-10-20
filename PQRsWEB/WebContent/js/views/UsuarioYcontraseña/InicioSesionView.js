define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/UsuarioYcontraseña/inicioSesionTemplate.html'
  ], function($, _, Backbone, inicioSesionTemplate){
  var InicioSesionView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(inicioSesionTemplate);
    }
  });

  return InicioSesionView;
});