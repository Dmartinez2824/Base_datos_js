import  express  from "express";
import router from "./src/routes/categoriasRouter.js";
import bodyParser from "body-parser";


const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.use('/categorias', router);

  app.listen(3000, () => {
    console.log("hola mundo");
    
  });