
/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login:function (req, res) {
    // Validar si se han enviado todos los campos
    if(!_.has(req.body,'correo') || !_.has(req.body,'clave')){
      return res.serverError({mensaje:'Todos los campos deben ser obligatorios', error:404});
    }
    // Encontrar el usuario
    // @ts-ignore
    Usuario.findOne(
      {
        correo:req.body.correo,
      }
    ).exec(
      (error,usuario)=>{
        // Si no encontro
        if(error){
          return res.serverError({mensaje:'Usuario no encontrado', error:404});
        }

        /*
        // Comparar claves con hash
        bcrypt.compare(req.body.clave, user.clave, function (error, matched) {
          if (error) return res.serverError({mensaje:error, error:500});

          if (!matched) return res.serverError({mensaje:'Contraseña incorrecta', error:300});

          //save the date the token was generated for already inside toJSON()

          //var token = jwt.sign(user.toJSON(), "this is my secret key", {
          //  expiresIn: '10m'
          //});

          //return the token here
          res.ok({mensaje:'OK', usuario:usuario});
        });

        */
        // Si encontro comparar contraseñas
        if(req.body.clave === usuario.clave){
          return res.ok({mensaje:'OK', usuario:usuario});
        }else {
          // Si no son iguales
          return res.serverError({mensaje:'Contraseña incorrecta', error:300});
        }

      }
    )
  }

};

