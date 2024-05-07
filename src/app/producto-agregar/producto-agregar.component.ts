import { Component } from '@angular/core';
import { ProductoService } from '../producto.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-agregar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './producto-agregar.component.html',
  styleUrl: './producto-agregar.component.css'
})
export class ProductoAgregarComponent {

  constructor(
    private productoService: ProductoService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  form = this.fb.group({
    descripcion: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    existencia: ['', [Validators.required]]
  });

  redirect() {
    this.router.navigate(['inicio'])
  }

  snackbar(state:string) {
  }

  submit() {
    if (this.form.valid) {
      this.productoService.addProducto(this.form.value).subscribe(
        response => this.redirect(),
        // error => this.snackbar('error')
      );
    } else {
      alert('ERROR');
    }
  }
}