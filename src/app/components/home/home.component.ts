import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public dataPokemon = [];

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit() {
    this.getAllPokemon();
  }

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
