import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './shared/components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './shared/components/pokemon-card/pokemon-card.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from './shared/search/search.component';
import { HeaderComponent } from './shared/header/header.component';
import { ModalComentarioComponent } from './shared/modal-comentario/modal-comentario.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    ButtonComponent,
    SearchComponent,
    HeaderComponent,
    ModalComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
