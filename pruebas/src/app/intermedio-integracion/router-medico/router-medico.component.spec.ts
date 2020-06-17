import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RouterMedicoComponent} from './router-medico.component';
import {ActivatedRoute, Router} from "@angular/router";
import {from, Observable} from "rxjs";

class FakeRouter {
  navigate(params) {
  }
}

class FakeActivatedRoute {
  // public params: Observable<any> = EMPTY; //Observable vacio
  public params: Observable<any> = from([{id: 'nuevo'}]);
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        {provide: Router, useClass: FakeRouter},
        {provide: ActivatedRoute, useClass: FakeActivatedRoute},
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de redireccionar a médico cuando se guarde', () => {
    const router = TestBed.inject<FakeRouter>(Router);
    const spy = spyOn(router, 'navigate');
    component.guardarMedico();
    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe de colocar el id = nuevo', () => {
    TestBed.inject<FakeActivatedRoute>(ActivatedRoute);
    expect(component.id).toBe('nuevo');
  })
});
