import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  private pageSize = 20; // número de itens por página
  private currentPageIndex = 0; // índice da página atual

  public currentPage = 0;
  public itemsPerPage = 15;
  public totalPages = 0;
  public pageNumbers: number[] = [];
  public pokemonList: any[] = [];
  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false;

  constructor(
    private pokeApiService: ApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      response => {
        this.setAllPokemons = response.results;
        this.updatePagination();
      },
      error => {
        this.apiError = true;
      }
    );
  }


  public updatePagination() {
    this.totalPages = Math.ceil(this.setAllPokemons.length / this.itemsPerPage);
    this.pageNumbers = Array(this.totalPages).fill(0).map((x, i) => i);
    this.setPage(0);
  }

  public setPage(page: number) {
    this.currentPage = page;
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pokemonList = this.setAllPokemons.slice(startIndex, endIndex);
  }

  public prevPage() {
    if (this.currentPage > 0) {
      this.setPage(this.currentPage - 1);
    }
  }

  public nextPages() {
    if (this.currentPage < this.totalPages - 1) {
      this.setPage(this.currentPage + 1);
    }
  }
  public updatePage() {
    // calcula o índice inicial e final da página atual
    const startIndex = this.currentPageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    // cria uma nova lista com os itens da página atual
    this.getAllPokemons = this.setAllPokemons.slice(startIndex, endIndex);
  }

  public nextPage() {
    // verifica se é possível avançar para a próxima página
    if (this.currentPageIndex < this.totalPages - 1) {
      this.currentPageIndex++;
      this.updatePage();
    }
  }


  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }


}
