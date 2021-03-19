import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';;
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {

  public search = false;
  public dataPokemon = [];
  public p;
  public order: string = 'name';
  public reverse: boolean = false;

  setOrder(order) {
    if (this.order === order) {
      this.reverse = !this.reverse;
    }
    this.order = order;
  }

  constructor(private pokemonService: PokemonsService) { }

  queryPokemon = new FormControl();
  public results$

  ngOnInit() {
    if(!this.search) {
      this.getAllPokemon();
    }
  }

  onSearch() {
    let value = this.queryPokemon.value;
    if (value && (value = value.trim()) !== '') {
      this.search = true;
      this.results$ = this.pokemonService.getPokemonByName(value)
    }
  };

  getAllPokemon() {
    this.pokemonService.getAllPokemon().subscribe(res => {
      let data = [];
      data.push(res);
      data.map(data => {
        data.data.map(item => {
          this.dataPokemon.push(item)
        })
      })
    });
  }
}
