import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SessionGuard } from './session.guard';

//TODO:🔴🔴 describe Es el nombre de la prueba "Examen del session Guard", podemos remplazar su titulo SessionGuard, como lo aremos a continuacion
describe('testing of Session Guard 🤘', () => {
  let guard: SessionGuard;

//🔴🔴beforeach, hace parte de la sintaxis de Jasmine, que se encarga de cargar por cada enunciado esta configuracion, es como un modulo de testing que nos cargara por cada enunciado 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(SessionGuard);
  });


  //🔴🔴 it, en este caso es el primer enunciado o primera pregunta de ese gran exame, esa primera pregunta deberia de crearse, deberia de instanciarse, asi que lo que estamos inject en beforeach deberia ser true, si no devuelve un error verdadero no se cumple esta condicion, y or lo tanto nos dice qye la pruab no ha pasado correctamente
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
