import  express  from "express";
import categoriasController from "../controllers/categoriaControler.js";

const router = express();

router.get('/', (req, res) => {
    res.send('Hello word rute categorie ')
  })

  router.get('/', categoriasController.getAllCategorias);

  router.post('/', categoriasController.createcategorias);

  export default router;
