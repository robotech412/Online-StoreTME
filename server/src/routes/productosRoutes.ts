import { Router } from 'express';

import productosController from '../controllers/productosController';

class ProductosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', productosController.list);
        this.router.get('/:id', productosController.getOne);
        this.router.post('/', productosController.create);
        this.router.put('/:id', productosController.update);
        this.router.delete('/:id', productosController.delete);
    }

}

export default new ProductosRoutes().router;