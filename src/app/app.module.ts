import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter'


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConsultaComponent } from './pessoa/consulta/consulta.component';
import { CadastroComponent} from './pessoa/cadastro/cadastro.component';

import { routing } from './../app.routes';
import { ConfigService } from './services/config.service';
import { PessoaService } from './services/pessoa.service';
import { ContatoService } from './services/contato.service';
import { ContatoComponent } from './pessoa/contato/contato.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ConsultaComponent,
    CadastroComponent,  
    ContatoComponent

  ],
  imports: [
    routing, 
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,   
    BrowserAnimationsModule
  ],
  providers: [ConfigService, PessoaService, ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
