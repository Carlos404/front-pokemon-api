import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { faArrowAltCircleDown, faArrowAltCircleUp, faAtlas, faBong, faBurn, faIdBadge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.sass']
})
export class PokemonDetailComponent implements OnInit {

  faArrowDown = faArrowAltCircleDown;
  faArrowUp = faArrowAltCircleUp;
  faBurn = faBurn;
  faBong = faBong;
  faAtlas = faAtlas;
  faIdBadge = faIdBadge;

  public id: string;
  public pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonsService
  ) { }

  ngOnInit() {
    this.pokemon= [];
    this.init()
  }

  init() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokemonService.getPokemonById(this.id);
  }
}
