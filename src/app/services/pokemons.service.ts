import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const url = 'https://api.pokemontcg.io/v2/cards';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  public dataPokemon = [];
  constructor(private http: HttpClient) { }

  getAllPokemon() {
    return this.http.get(url).pipe(
      catchError(this.handleError(`getAllPokemon`))
    );
  }

  getPokemonById(idDetaild) {
    let idPokemon = [];
    this.dataPokemon = [];
    this.http.get(url).subscribe(data => {
      this.dataPokemon.push(data)
      this.dataPokemon.filter(item => {
        item.data.forEach(element => {
          if (element.id === idDetaild) {
            idPokemon.push(element)
          }
        });
      })
    })
    return idPokemon
  }

  getPokemonByName(nameDetaild) {
    let namePokemon = [];
    this.dataPokemon = [];
    this.http.get(url).subscribe(data => {
      this.dataPokemon.push(data)
      this.dataPokemon.filter(item => {
        item.data.forEach(element => {
          if (element.name.toLocaleLowerCase().indexOf(nameDetaild.toLocaleLowerCase()) > -1) {
            namePokemon.push(element)
          }
        });
      })
    })
    return namePokemon;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }
}
