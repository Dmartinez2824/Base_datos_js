
import Categoria from "../models/Categoria.js";

class CategoriasController{

    //metodos
    //Obtener todos las categorias de la base de datos
   static async getAllCategorias(req, res){
        const OBJCategoria = new Categoria();
        const categorias = await OBJCategoria.getAll();
       return res.json(categorias);
    }

    static async createCategoria(req, res){
        const {nombre, descripcion} = req.body;
        const OBJCategoria = new Categoria();
        const categorias = await OBJCategoria.create(nombre, descripcion);
       return res.json(categorias);
    }
    
    static async updateCategoria (req, res) {
        //query params
        const { id } = req.params;
        const { nombre } = req.body;
         const OBJCategoria = new Categoria();
         const categorias = await OBJCategoria.update(id, nombre);
         return res.json(categorias);
    }

    
    static async deleteCategoria (req, res) {
        const { id } = req.params;
        const OBJCategoria = new Categoria();
        const categorias = await OBJCategoria.delete(id);
       return res.json(categorias);
    }

    
}
export default CategoriasController;
