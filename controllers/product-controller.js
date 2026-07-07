import { supabase } from "../config.js";

export const getProducts = async (req, res) =>{
     console.log("Listado de productos");
    const data=await supabase.from('productos').select('*');
    console.log(data);
    //res.json(data);
    res.render("productos",{ title: 'Hey', message: 'Hello there!', productos:data });
}

export const  addProduct= async (req, res) =>{
    console.log("Añadir producto");
    const {nombre,unidades,precio}=req.body;
    if(!nombre){
        res.send("El nombre es obligatorio");
    }
    const insertar=await supabase.from('productos').insert({
      "nombre": nombre,
      "unidades": Number(unidades),
      "precio": Number(precio)
    });
    res.redirect("/");
}

export const nuevoFormulario=async (req,res)=>{
    res.render('nuevo', { title: 'Hey', message: 'Hello there!' });
}

