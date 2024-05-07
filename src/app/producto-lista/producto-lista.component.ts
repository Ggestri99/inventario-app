import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css'
})
export class ProductoListaComponent {

  productos: Producto[]

  constructor(
    private productoService: ProductoService,
  ) {
    this.getAllProductos()
   }

  getAllProductos() {
    this.productoService.getProductos().subscribe((data:Producto[]) => {
      this.productos = data;
    })
  }


}
