import { Routes } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ProductoAgregarComponent } from './producto-agregar/producto-agregar.component';

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
        path: '',
        component: ProductoListaComponent,
        pathMatch: 'full'
    }

];
