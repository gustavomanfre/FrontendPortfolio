import { Component, OnInit} from '@angular/core';
import { PersonaService} from 'src/app/servicios/persona.service';
import { Persona} from 'src/app/model/persona';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent implements OnInit {

  persona: Persona = new Persona('','','','','','','');

  constructor(private personaService:PersonaService){}

  ngOnInit(): void {
    this.personaService.getPersona()
    .subscribe((persona) => {
      this.persona = persona;
    });
  }

}




