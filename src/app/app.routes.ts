import { Routes } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ProductoAgregarComponent } from './producto-agregar/producto-agregar.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

export const routes: Routes = [
    {
        path: 'inicio',
        title: 'Inventario-app',
        component: ProductoListaComponent
    },
    {
        path:'agregar',
        title:'Agregar producto',
        component:ProductoAgregarComponent
    },
    {
        path:'editar-producto/:id',
        title:'Editar producto',
        component:EditarProductoComponent
    
    },
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'inicio',
        pathMatch: 'full'
    }

];
