/**
 * UsuarioHabitacion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    fkUsuario:{
      model:'usuario',
      required:true
    },
    fkHabitacion:{
      model:'habitacion',
      required:true
    },
    esAdminHabitacion:{
      type:'boolean'
    }
  },

};

