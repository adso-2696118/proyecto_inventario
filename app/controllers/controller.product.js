import { pool } from "../config/mysqldb";
import { config } from "dotenv";
config();

export const mostrar = async(req, res) => {

    try {
        const rest = await pool.query(`call SP_MOSTRARP();`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};
export const listar = async(req, res) => {
    let id = req.params['id']

    try {
        const rest = await pool.query(`call SP_LISTARP(${id});`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};
export const crear = async(req, res) => {
    const NOMBRE = req.body.nombre;
    const IMAGEN = req.body.imagen;
    const DESCRIPCION = req.body.descripcion;
    const PRECIO = req.body.precio;
    const CANT_INICIAL = req.body.cant_inicial;
    const STOCK = req.body.stock;
    const COMPRADOS = req.body.comprados;
    const ID_PROVEEDORES = req.body.id_proveedores;

    
    try {
        const respuesta = await pool.query(`CALL SP_CREARP ('${NOMBRE}', '${IMAGEN}', '${DESCRIPCION}', '${PRECIO}', '${CANT_INICIAL}', '${STOCK}', '${COMPRADOS}', ${ID_PROVEEDORES});`);
        res.json({"respuesta": respuesta})
    } catch (err) {
        res.json({"error": err})
    }
};
export const modificar = async(req, res) => {
    const ID = req.body.id
    const NOMBRE = req.body.nombre;
    const IMAGEN = req.body.imagen;
    const DESCRIPCION = req.body.descripcion;
    const PRECIO = req.body.precio;
    const CANT_INICIAL = req.body.cant_inicial;
    const STOCK = req.body.stock;
    const COMPRADOS = req.body.comprados;
    const ID_PROVEEDORES = req.body.id_proveedores;

    try {
        const rest = await pool.query(`call SP_MODIFICARP('${ID}' ,'${NOMBRE}', '${IMAGEN}', '${DESCRIPCION}', '${PRECIO}', '${CANT_INICIAL}', '${STOCK}', '${COMPRADOS}', '${ID_PROVEEDORES}');`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};
export const eliminar = async(req, res) => {
    const id = req.body.id

    try {
        const rest = await pool.query(`call SP_ELIMINARP(${id});`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};
export const masVendido = async(req, res) => {
    try {
        const rest = await pool.query(`call SP_PROD_MAS_VENDIDO();`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"eror": error})
    }
}