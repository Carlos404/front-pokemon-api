import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.sass']
})
export class BaseComponent implements OnInit {


  constructor(
    public pokemonService: PokemonsService,
  ) { }

  queryPokemon = new FormControl();
  public results$
  public search = false;

  ngOnInit(): void {
  }

  onSearch() {
    let value = this.queryPokemon.value;
    if (value && (value = value.trim()) !== '') {
      this.search = true;
      this.results$ = this.pokemonService.getPokemonByName(value)
    }
  };

}
