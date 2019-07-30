/**
 * ComponenteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const axios = require('axios');

module.exports = {
  accionarComponente: async (req,res)=>{
    const parametros = req.allParams();
    console.log(parametros);
    // Validar que se haya mandado un id
    if(parametros.id){
        const url = 'http://192.168.100.60:1337/sensor/accionar';
        // Buscar componente

        const componente = Componente.findOne({id:parametros.id,}).exec(
          (error,componente)=>{
            if(error){
              return res.serverError({mensaje:'Error en el servidor', error:500});
            }
            if (!componente) return res.badRequest({mensaje:'No existe un componente con ese id', error:404});
            // Si existe el componente
            const respuesta = axios.post(
              url,
              {id: componente.id, codigoSensorAsociado:componente.codigoSensorAsociado}
              ).then(
              (respuesta)=>{
                if(respuesta.error){
                  return res.serverError({mensaje:'Error en el servidor IOT', error:500, estado: false});
                }else {
                  // Actualizar estado componente
                  const componenteActual = Componente.updateOne(
                    {
                      id:componente.id
                    }
                    ).set({estado:!componente.estado}).then(
                      (componenteActualizado)=>{
                        return res.ok({mensaje:"Sensor accionado", estado:true, componente:componenteActualizado})
                      }
                    ).catch(
                      (error)=>{
                        return res.serverError({mensaje:`Error en actualizar el estado ${error}`, error:500});
                      }
                    );

                }
              }
            ).catch(
              (error)=>{
                return res.serverError({mensaje:`Error en el servidor IOTEEEEEE:  ${error}`, error:500});
              }
            );
          }
        );

    }else {
      return res.badRequest({
        error:404,
        mensaje:'Mande un id de componente valido'
      })
    }

  },
  apagarComponente: async (req,res)=>{
    const parametros = req.allParams();
    console.log(parametros);
    // Validar que se haya mandado un id
    if(parametros.id){
      const url = 'http://192.168.100.60:1337/sensor/apagar';
      // Buscar componente

      const componente = Componente.findOne({id:parametros.id,}).exec(
        (error,componente)=>{
          if(error){
            return res.serverError({mensaje:'Error en el servidor', error:500});
          }
          if (!componente) return res.badRequest({mensaje:'No existe un componente con ese id', error:404});
          // Si existe el componente
          const respuesta = axios.post(
            url,
            {id: componente.id, codigoSensorAsociado:componente.codigoSensorAsociado}
          ).then(
            (respuesta)=>{
              if(respuesta.error){
                return res.serverError({mensaje:'Error en el servidor IOT', error:500, estado: false});
              }else {
                // Actualizar estado componente
                const componenteActual = Componente.updateOne(
                  {
                    id:componente.id
                  }
                ).set({estado:!componente.estado}).then(
                  (componenteActualizado)=>{
                    return res.ok({mensaje:"Sensor apagado", estado:true, componente:componenteActualizado})
                  }
                ).catch(
                  (error)=>{
                    return res.serverError({mensaje:`Error en actualizar el estado ${error}`, error:500});
                  }
                );

              }
            }
          ).catch(
            (error)=>{
              return res.serverError({mensaje:`Error en el servidor IOTEEEEEE:  ${error}`, error:500});
            }
          );
        }
      );

    }else {
      return res.badRequest({
        error:404,
        mensaje:'Mande un id de componente valido'
      })
    }

  }

};

