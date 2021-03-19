import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.sass']
})
export class PokemonDetailComponent implements OnInit {
  
  public id: string;
  public pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonsService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokemonService.getPokemonById(this.id);
    console.log(this.pokemon)
  }
}
