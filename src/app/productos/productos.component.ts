import { Component, OnInit, inject } from '@angular/core';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  //variables, constructores, funciones
  httpClient: ProductoService = inject(ProductoService);
  producto: any = [];
  paginaActual: number = 1;
  productosPorPagina: number = 5;
  productosFiltrados: any = [];
  constructor() {}

  ngOnInit(): void {
    this.httpClient.getProductos().subscribe((data: any) => {
      this.producto = data.products;
      this.setProductosFiltrados();
    });
  }
  setProductosFiltrados() {
    const inicio = (this.paginaActual - 1) * this.productosPorPagina;
    const fin = inicio + this.productosPorPagina;
    this.productosFiltrados = this.producto.slice(inicio, fin);
  }

  cambiarPagina(pagina: number) {
    this.paginaActual = pagina;
    this.setProductosFiltrados();
  }
}
