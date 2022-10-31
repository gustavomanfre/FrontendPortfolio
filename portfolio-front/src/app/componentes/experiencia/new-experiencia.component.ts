import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from 'src/app/model/experienciaLaboral';


@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.scss']
})

export class NewExperienciaComponent implements OnInit {

  nombreEmpresa: string = ''
  tipoExperiencia: string = ''
  nombreExperiencia: string = ''

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {}

  onCreate(): void {
    const experiencia = new Experiencia(this.nombreEmpresa, this.nombreExperiencia, this.tipoExperiencia );

    this.experienciaService.save(experiencia)
    .subscribe(data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
