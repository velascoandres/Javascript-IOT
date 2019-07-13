/**
 * Sitio.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type: 'string', required: true
    },
    direccion:{
      type: 'string', required: true
    },
    area:{
      type: 'number', required: true
    },
    habitaciones:{
      collection:'habitacion',
      via:'fkSitio'
    },
    usuarios:{
      collection:'UsuarioSitio',
      via:'fkSitio'
    }
  },

};

