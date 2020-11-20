import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'search/:termino', component: SearchComponent },
  // { path: 'contact', component: ContactComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];
// useHash se usa para evitar los cambios en httaccess, para poder procesar las rutas ya que no existe una carpeta llamada home, about,...
// los navegadores van a saber que lo que viene después del hash no es una carpeta sino una parte de la aplicación.
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
