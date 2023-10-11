import TIENDAService from "../service/tienda.services.js";


class   TIENDAcontroller{

async createTIENDA(request, response){
try{
    /**
        * body es
*{ CAMPOS que van a estar en la BD
   * nombre: lapices,
   * descripcion:grafito negro,
   * cantidad:20,
   * precio:80
* } TIENDAService.createTIENDA(request.body);
*/

    const id = await TIENDAService.createTienda(request.body);
    return response.status(201).json(id);
} catch (error) {
    console.error(error)
    return response.status(500).send('Error interno del Servidor')
}
}



async getTIENDAById (request, response){
try{
    const id =request.params.id;
    const TIENDA = await TIENDAService.getTIENDAById(id);

    if(!TIENDA){
        return response.status(404).send('Tienda no encontrada');
}
return response.status(201).json(TIENDA)

}catch (error) {
    console.error(error)
    return response.status(500).send('Error interno del Servidor')
}
}
async updateTienda(request, response){
    try {
        const id = request.params.id;
        const update = request.body;
        const success = await TIENDAService.updateTIENDA(id,update)
        
        if (! success) {
return response.status(404).send('Tienda no encontrada');
        }
        response.status(201).send('Tienda actualizada');
    } catch (error) {
        console.error(error);
        return response.status(500).send('Error interno del Servidor');
    }
}
async deleteTienda(request, response){
    try {
        const id = request.params.id;
        console.log('hasta aqui se ejecuta TIENDAService.deleteTienda(id)')
        const success = await TIENDAService.deleteTienda(id);
        
        if (! success) {
return response.status(404).send('Tienda no encontrada');
        }
       return response.send('Tienda Borrada');
    } catch (error) {
        console.error(error);
       return response.status(500).send('"CARAMBA" Error interno del Servidor');
    }
}

}



export default new TIENDAcontroller();
