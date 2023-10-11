import db from "../database/db.js";

class TiendaDAO{
    async  createTienda(nombre,descripcion,categoria,cantidad,precio){
        const [id] = await db('productos')
        .insert({

            nombre,
            descripcion,
            categoria,
            cantidad,
            precio
        })
        .returning('id');
        return id
    }
async getTiendaById(id){
    const tienda = await db('productos') // Este es un query en  version knex
    .select('*')
    .where ({id})
    .first();
    return tienda
}

async updateTienda(id, updates){
   await db('productos')
    .where ({id})
    .update(updates);   
   
    return true
}
async deleteTienda(id){
await db ('productos')
.where({id})
.del();
return true

}

}
export default new TiendaDAO();
