import { Component, OnInit } from '@angular/core';
import{PersonaService} from 'src/app/servicios/persona.service';
import { Persona } from 'src/app/model/persona';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {

  persona: Persona = new Persona('','','','','','','');

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {

    this.personaService.getPersona()
    .subscribe((persona) => {
      this.persona = persona;
    });
  }
}





