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
      type: 'string', required: true, unique: true
    },
    clave:{
      type: 'string', required: true
    },
    estado:{
      type: 'boolean', required: false
    },
    roles:{
      collection:'usuarioRol',
      via:'fkUsuario'
    },
    sitios:{
      collection:'UsuarioSitio',
      via:'fkUsuario'
    },
    habitaciones:{
      collection:'UsuarioHabitacion',
      via:'fkUsuario'
    }
  },

  customToJSON: function() {
    // Return a shallow copy of this record with the password and ssn removed.
    // @ts-ignore
    return _.omit(this, ['clave', 'ssn'])
  },
  validationMessages: { //hand for i18n & l10n
    names: {
      required: 'Name is required'
    },
    email: {
      email: 'Provide valid email address',
      required: 'Email is required',
      unique: 'This email is already existing'
    },
    password: {
      required: 'Password is required'
    }
  },
  // Para el hash la contraseña
  /*
  beforeCreate: function (values, cb) {

    // Hash password
    bcrypt.hash(values.password, 10, function (err, hash) {
      if (err) return cb(err);
      values.clave = hash;
      cb();
    });
  }
  */
};

