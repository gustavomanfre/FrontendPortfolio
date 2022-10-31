import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';

import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';

import { EditSkillComponent } from './componentes/hys/edit-skill.component';
import { NewSkillComponent } from './componentes/hys/new-skill.component';

import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';

import { NotFoundComponent } from './componentes/not-found/not-found.component';


const routes: Routes = [

  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent},

  {path: 'new-educacion', component: NewEducacionComponent},
  {path: 'edit-educacion/:id', component:EditEducacionComponent},

  {path: 'new-experiencia', component: NewExperienciaComponent},
  {path: 'edit-experiencia/:id', component: EditExperienciaComponent},

  //{path: '**', component:NotFoundComponent},

  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
