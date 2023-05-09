import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../services/api.service';

//Services

@Component({
  selector: 'app-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.obterPokemon();
  }

  public obterPokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.apiService.obterPokemon(`${this.urlPokemon}/${id}`);
    const nome = this.apiService.obterPokemon(`${this.urlName}/${id}`);

    return forkJoin([pokemon, nome]).subscribe(
      res => {
        this.pokemon = res;
        this.isLoading = true;
      },
      error => {
        this.apiError = true;
      }
    );
  }
}
