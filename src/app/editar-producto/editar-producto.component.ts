import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent {

  producto: Producto = new Producto();
  id: number;

  form = this.fb.group({
    descripcion: ['', [Validators.required]],
    precio: [0, [Validators.required]],
    existencia: [0, [Validators.required]]
  });

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private enroute: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.productoService.getProductoById(this.id).subscribe(
      {
        next: (data) => {
          this.producto = data;
          this.form.patchValue({
            descripcion: this.producto.descripcion,
            precio: this.producto.precio,
            existencia: this.producto.existencia
          })
        },
        error: (error) => {
          console.log(error);
        }
      }
    )
  }

  submit() {
    this.guardarProducto()
  }

  guardarProducto() {
    this.productoService.updateProducto(this.id, this.form.value).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.enroute.navigate(['/productos'])
        },
        error: (error) => {
          console.log(error);
        }
      }
    )
  }
}
