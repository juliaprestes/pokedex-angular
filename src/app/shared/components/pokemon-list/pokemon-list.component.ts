import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  private todosPokemons: any[] = [];
  public pokemonsParaExibir: any[] = [];

  public apiError: boolean = false;
  public isLoading: boolean = false;

  public paginaAtual = 1;
  public itensPagina = 10;
  public totalPages = 0;


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getDadosAPI();
  }

  getDadosAPI() {
    this.isLoading = true;
    this.apiService.listarTodosPokemons.subscribe(
      response => {
        this.todosPokemons = response.results;
        this.pokemonsParaExibir = this.obterPokemonsParaPaginaAtual();
        this.totalPages = Math.ceil(this.todosPokemons.length / this.itensPagina);
        this.isLoading = false;
        console.log(response);

      },
      error => {
        this.apiError = true;
        this.isLoading = false;
      }
    );

  }
  public obterProcurar(value: string) {
    const filter = this.todosPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.pokemonsParaExibir = filter;
    this.paginaAtual = 1;
  }

  public obterPokemonsParaPaginaAtual() {
    const startIndex = (this.paginaAtual - 1) * this.itensPagina;
    const endIndex = startIndex + this.itensPagina;
    return this.todosPokemons.slice(startIndex, endIndex);
  }

  public paginaAnterior() {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
      this.pokemonsParaExibir = this.obterPokemonsParaPaginaAtual();
    }
  }

  public proximaPagina() {
    if (this.paginaAtual < this.obterTotalPaginas()) {
      this.paginaAtual++;
      this.pokemonsParaExibir = this.obterPokemonsParaPaginaAtual();
    }
  }

  public obterTotalPaginas() {
    return Math.ceil(this.todosPokemons.length / this.itensPagina);
  }
}
