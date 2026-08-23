import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Nosotros } from './nosotros/nosotros';
import { Login } from './login/login';
import { Galeria } from './galeria/galeria';
import { Contacto } from './contacto/contacto';
import { authGuard } from './guards/auth-guard';
import { formGuard } from './guards/form-guard';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'galeria', component: Galeria, canActivate: [authGuard] },
    { path: 'nosotros', component: Nosotros },
    { path: 'contacto', component: Contacto, canDeactivate: [formGuard] },
    { path: 'login', component: Login },
    { path: '**', component: Home }
];