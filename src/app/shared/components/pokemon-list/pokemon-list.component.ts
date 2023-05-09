import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  private allPokemons: any[] = [];
  public pokemonsToDisplay: any[] = [];

  public apiError: boolean = false;
  public isLoading: boolean = false;

  public currentPage = 1;
  public pageSize = 10;
  public totalPages = 0;

  constructor(private pokeApiService: ApiService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.pokeApiService.apiListAllPokemons.subscribe(
      response => {
        this.allPokemons = response.results;
        this.pokemonsToDisplay = this.getPokemonsForCurrentPage();
        this.totalPages = Math.ceil(this.allPokemons.length / this.pageSize); // define o valor de totalPages
        this.isLoading = false;
      },
      error => {
        this.apiError = true;
        this.isLoading = false;
      }
    );
  }

  public getSearch(value: string) {
    const filter = this.allPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.pokemonsToDisplay = filter;
    this.currentPage = 1; // reset page to 1 after search
  }

  public getPokemonsForCurrentPage() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.allPokemons.slice(startIndex, endIndex);
  }

  public previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pokemonsToDisplay = this.getPokemonsForCurrentPage();
    }
  }

  public nextPage() {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
      this.pokemonsToDisplay = this.getPokemonsForCurrentPage();
    }
  }

  public getTotalPages() {
    return Math.ceil(this.allPokemons.length / this.pageSize);
  }
}
