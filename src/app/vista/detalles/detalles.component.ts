import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { Producto } from 'src/app/models/Productos';


import { ProductosService } from '../../services/productos.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

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

  productos: any = [];

  constructor(private productosService: ProductosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.productosService.getProducto(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.producto = res;
          },
          err => console.error(err)
        )
    }
  }



}