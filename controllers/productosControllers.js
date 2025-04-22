
import producto from "../models/producto.js";

class productosController{

   static async getAllproductos(req, res){
        const OBJproducto = new producto();
        const productos = await OBJproducto.getAll();
       return res.json(productos);
    }

    static async createproducto(req, res){
        const {nombre, descripcion} = req.body;
        const OBJproducto = new producto();
        const productos = await OBJproducto.create(nombre, descripcion);
       return res.json(productos);
    }
    
    static async updateproducto (req, res) {
        //query params
        const { id } = req.params;
        const { nombre } = req.body;
         const OBJproducto = new producto();
         const productos = await OBJproducto.update(id, nombre);
         return res.json(productos);
    }

    
    static async deleteproducto (req, res) {
        const { id } = req.params;
        const OBJproducto = new producto();
        const productos = await OBJproducto.delete(id);
       return res.json(productos);
    }

    
}
export default productosController;
