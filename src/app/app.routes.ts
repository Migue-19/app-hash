import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Inicio' },
  { path: 'about', component: About, title: 'Acerca de' },
  { path: 'contact', component: Contact, title: 'Contacto' },
  { path: '**', redirectTo: '' },
];
