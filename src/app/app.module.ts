import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './shared/components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './shared/components/pokemon-card/pokemon-card.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { HeaderComponent } from './shared/header/header.component';
import { ModalComentarioComponent } from './shared/modal-comentario/modal-comentario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms'
import { FormComentarioComponent } from './shared/modal-comentario/form-comentario/form-comentario.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule } from '@angular/material/button';
import { FavoriteButtonComponent } from './shared/components/button/favorite-button/favorite-button.component'
import { SearchComponent } from './shared/components/search/search.component';
import { PokemonDetailsComponent } from './shared/components/pokemon-details/pokemon-details.component';
@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    ButtonComponent,
    SearchComponent,
    HeaderComponent,
    ModalComentarioComponent,
    FormComentarioComponent,
    FavoriteButtonComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgxPaginationModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
