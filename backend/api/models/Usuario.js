/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type: 'string', required: true
    },
    apellido:{
      type: 'string', required: true
    },
    correo:{
      type: 'string', required: true
    },
    clave:{
      type: 'string', required: true
    },
    estado:{
      type: 'boolean', required: false
    },
    roles:{
      collection:'rol',
      via:'usuarios'
    },
    sitios:{
      collection:'sitio',
      via:'usuarios'
    },
    habitaciones:{
      collection:'habitacion',
      via:'usuarios'
    }
  },

  customToJSON: function() {
    // Return a shallow copy of this record with the password and ssn removed.
    return _.omit(this, ['clave', 'ssn'])
  }
};

