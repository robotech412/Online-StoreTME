import {request, Request, Response } from 'express';

import pool from '../database';

class ProductosController {

    public async list(req: Request, res: Response): Promise<void> {
        const productos = await pool.query('SELECT * FROM productos');
        res.json(productos);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const productos = await pool.query('SELECT * FROM productos WHERE id_producto = ?', [id]);
        console.log(productos.length);
        if (productos.length > 0) {
            return res.json(productos[0]);
        }
        res.status(404).json({ text: "The product doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO productos set ?', [req.body]);
        res.json({ message: 'Product Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldProduct = req.body;
        await pool.query('UPDATE productos set ? WHERE id_producto = ?', [req.body, id]);
        res.json({ message: "The product was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM productos WHERE id_producto = ?', [id]);
        res.json({ message: "The product was deleted" });
    }
}

const productosController = new ProductosController;
export default productosController;