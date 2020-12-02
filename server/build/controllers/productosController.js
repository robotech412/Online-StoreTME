"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield database_1.default.query('SELECT * FROM productos');
            res.json(productos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const productos = yield database_1.default.query('SELECT * FROM productos WHERE id_producto = ?', [id]);
            console.log(productos.length);
            if (productos.length > 0) {
                return res.json(productos[0]);
            }
            res.status(404).json({ text: "The product doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO productos set ?', [req.body]);
            res.json({ message: 'Product Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldProduct = req.body;
            yield database_1.default.query('UPDATE productos set ? WHERE id_producto = ?', [req.body, id]);
            res.json({ message: "The product was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM productos WHERE id_producto = ?', [id]);
            res.json({ message: "The product was deleted" });
        });
    }
}
const productosController = new ProductosController;
exports.default = productosController;
