import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';

/* importando as classes para uso da biblioteca de rotas do Angular
essas rotas serão utilizadas para a navegação da SPA - Single Page Application
*/
import { Routes, RouterModule } from '@angular/router';

//mapear uma rota (URL) para cada componente do projeto.
const routes : Routes  = [
  {path : 'cadastro-clientes', component : CadastroClientesComponent },
  {path : 'consulta-clientes', component : ConsultaClientesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroClientesComponent,
    ConsultaClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
