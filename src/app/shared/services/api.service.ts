import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=600';

  constructor(private http: HttpClient) { }

  get listarTodosPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons: any) => {
          this.obterPokemon(resPokemons.url).subscribe(
            res => resPokemons.status = res
          );
        })
      })
    )
  }

  public obterPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }
}
