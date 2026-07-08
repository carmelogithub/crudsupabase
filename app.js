
import express from "express";
import router from "./routes/rutas.js";

console.log("Arrancando proyecto sesión 3");


//console.log(supabase);
const app=express();
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/",router);
app.listen(3000,() => {
console.log(`Servidor ejecutándose en el puerto 3000`);
});

