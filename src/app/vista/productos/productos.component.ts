import { Component, OnInit } from '@angular/core';


import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {

  productos: any = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.getProductos();
  }

  getProductos(){
    this.productosService.getProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.error(err)
      );
  }

  deleteProducto(id: string){
    this.productosService.deleteProducto(id).subscribe(
      res => {
        console.log(res);
        this.getProductos();
      },
      err => console.error(err)
    )
  }
}
