import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PokemonsService } from './pokemons.service';

describe('PokemonsService', () => {
  let service: PokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        {
          provide: HttpClient,
          useValue: {
            get: (string) => of('https://api.pokemontcg.io/v2/cards')
          }
        }
      ]
    });
    service = TestBed.inject(PokemonsService);
  });

  // it('should be created', () => {
  //   expect(service).not.toThrow();
  // });

});
