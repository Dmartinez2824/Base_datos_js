import Categoria from "../modules/Categoria.js";




export class categoriasController {
  static async getAllCategorias(req, res) {
    // res.json({"mensaje": "hola desde controlador"});
    const objCategoria = new Categoria();
    const categorias = await objCategoria.getAll();
    // objCategoria.getAll();
    return res.json(objCategoria);
        
    }
    static createcategorias(req,res){
      const {nombre, descripcion} = req .body;
      const objCategoria = new Categoria();
      const categoria = objCategoria.create(nombre, descripcion);
      return res.json(categoria);
      

    }
}


export default categoriasController;