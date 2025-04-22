import connection from "../utils/db.js";

class producto{
    constructor(){      
    }

    async getAll(){
        try {
            const [rows] = await connection.query("select * from categorias;");
            return rows;
        } catch (error) {
            throw new Error("Error al obtener las categorias");
        }        
    }

    async create(nombre, descripcion){
        const [result] = await connection.query("insert into categorias(nombre, descripcion) value (?,?) ", [nombre, descripcion]);

        return {
            id: result.insertId,
            nombre, 
            descripcion
        }
    }

    async delete(id) {
        try {
            const [datos] = await this.getById(id)
            console.log(datos);
            // consulto productos relacionados
            const tieneProductosRelacionados = await this.relacionProductos(datos.id);
            
            // consulta si tiene productos relacionados
            if (tieneProductosRelacionados.length > 0) {        
                return {
                    error: true,
                    message: "No se puede eliminar la categoria existen productos relacionados"  
                }   
            }
     
             // si no tiene se elimina 
            const [eliminado] = await connection.query(`delete from categorias where id = ${id}`);
     
                if (eliminado.affectedRows > 0) {
                    return {
                        error: false,
                        message: `Se elimino con exito la categoria con id = ${id}`,
                        data: datos
                    }   
                }else {
                    return {
                        error: true,
                        message: `No se pudo eliminar ninguna Categoria = ${id}`
                    }  
                }
            
        } catch (error) {
            throw new Error("Error al obtener las categorias");
        }
    }

    async update(id,nombre) {
        console.log(id, nombre);

    }

    async relacionProductos(categoria_id) {
        try {
            const [rows] = await connection.query(`select * from productos where categoria_id = ${categoria_id} `);
            console.log(rows);
            return rows;
        } catch (error) {
            throw new Error("Error al obtener las categorias");
        }        
    }

    async getById(id){
        const [consulta] = await connection.query(`select * from categorias where id = ${id}`);  
        
        if (!consulta || consulta.length === 0) {
            console.log('No se encontraron resultados para el id:', id);
            return null;
        }
        
        return consulta;
    }

    async updatePartial(id,campos){
        let query = "UPDATE categorias SET ";
        let params = [];
        for (const [key,value] of Object .entries(campos)){
            query += `${key} = ?, `;
            params.push(value)
    }
    query = query.slice(0,-2)
    query += " WHERE id = ?"
    params.push(id)
    try {
        const [result] = await connection.query(query,params);
        if(result.affectedRows === 0){
            return {
                error:true,
                message: `No se pudo actualizar ninguna Categoria = ${id}`
            }
    }
    return{
        error:false,
        message: `Se pudo actualizar la categoria = ${id}`
    }
    } catch (error) {
        throw new Error("Error al actualizar la categoria");
    }
}
}
export default producto;