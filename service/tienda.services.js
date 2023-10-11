import TiendaDAO from "../dao/tienda.dao.js"

class TIENDAService{
    async createTienda(tiendaDto){
        const {nombre,descripcion,categoria,cantidad,precio}=tiendaDto

        return TiendaDAO.createTienda(nombre,descripcion,categoria,cantidad,precio)
}

async getTIENDAById(id){
   
    return TiendaDAO.getTiendaById(id)
}

async updateTIENDA(id, updates){
    
    return TiendaDAO.updateTienda(id, updates)
}

async deleteTienda(id){
    return TiendaDAO.deleteTienda(id)
}

}
export default new TIENDAService();
