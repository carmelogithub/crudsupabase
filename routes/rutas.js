import { Router } from "express";
import { getProducts,addProduct,nuevoFormulario, actualizarFormulario, eliminarFormulario,updateProduct,deleteProduct } from "../controllers/product-controller.js";

const router=Router();
router.get("/",getProducts);
//router.get("/add",addProduct);
//rutas para añadir nuevo producto
router.get("/nuevo",nuevoFormulario);
router.post("/addProduct",addProduct);
//rutas para actualizar producto
router.get("/actualizar",actualizarFormulario);
router.post("/updateProduct",updateProduct);
//rutas para eliminar producto
router.get("/eliminar",eliminarFormulario);
router.post("/deleteProduct",deleteProduct);

export default router;