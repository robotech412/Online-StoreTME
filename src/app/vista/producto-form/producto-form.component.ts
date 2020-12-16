import { Component, HostBinding, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Productos';
import { ActivatedRoute, Router } from '@angular/router'

import { ProductosService } from '../../services/productos.service'

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

   @HostBinding ('class') classes = 'row';

  producto: Producto = {
    id_producto: 0,
    marca: '',
    precio: 0,
    descripcion: '',
    color: '',
    tallas: '',
    cantidad: 0,
    image: '',
    fecha_ingreso: new Date()
  };

  edit: boolean = false;

  constructor(private productosService: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.productosService.getProducto(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.producto = res;
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  saveNewProducto(){
    delete this.producto.fecha_ingreso;
    delete this.producto.id_producto;

    this.productosService.saveProducto(this.producto)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['dashboard/productos']);
      },
      err => console.error(err)
    )
  }

  updateProducto(){
    delete this.producto.fecha_ingreso;
    this.productosService.updateProducto(this.producto.id_producto, this.producto)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['dashboard/productos']);
      },
      err => console.error(err)
    )
  }
}