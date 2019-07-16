/**
 * Habitacion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type: 'string', required: true
    },
    capacidad:{
      type: 'number', required: true
    },
    area:{
      type: 'number', required: true
    },
    fkSitio:{
      model:'sitio'
    },
    componentes:{
      collection:'componente',
      via:'fkHabitacion',
    },
    usuarios:{
      collection:'UsuarioHabitacion',
      via:'fkHabitacion'
    }
  },

};

