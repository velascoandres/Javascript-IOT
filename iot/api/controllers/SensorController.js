/**
 * SensorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  accionar:(req,res)=>{
    if(!_.has(req.body,'id') || !_.has(req.body,'codigoSensorAsociado')){
      return res.badRequest({mensaje:'Todos los campos deben ser obligatorios', error:404});
    }
    idPin = req.body.id
    console.log(idPin)
    console.log('Se acciono el componenteffff:');
    return res.ok(
      {
        mensaje:'Componente accionado',
        estado:true,
      }
    )
  },
  apagar:(req,res)=>{
    if(!_.has(req.body,'id') || !_.has(req.body,'codigoSensorAsociado')){
      return res.badRequest({mensaje:'Todos los campos deben ser obligatorios', error:404});
    }
    console.log('Se apagó el componente:');
    return res.ok(
      {
        mensaje:'Componente apagado',
        estado:true,
      }
    )



  }

};

