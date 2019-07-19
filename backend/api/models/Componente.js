/**
 * Componente.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type: 'string', required: true
    },
    codigoSensorAsociado:{
      type: 'string', required: true
    },
    fkHabitacion: {
      model:'habitacion'
    },
    logs:{
      collection:'log',
      via:'fkComponente'
    },
    estado : {
      type : "boolean",
      defaultsTo : false
    }
  },

};

