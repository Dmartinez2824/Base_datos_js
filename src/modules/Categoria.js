import db from "../utils/db.js";


export class Categoria{
    
    constructor(){
        // console.log("hola mundo desde el constructor de la clase categoria");
        }
        async getAll(){
           try {
             const [rows] = await db.query("select * from categorias;");
             return rows;
           } catch (Error) {
            throw new Error("Error al obtener categorias");
            
           }
            
        }
        async create(nombre,descripcion){
    db.query(" insert into categorias (nombre, descripcion) values(?,?)" [nombre,descripcion]);
        }
}

export default Categoria;