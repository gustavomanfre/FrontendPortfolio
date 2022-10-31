import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PersonaService } from './servicios/persona.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BannerComponent } from './componentes/banner/banner.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider, InterceptorService } from './servicios/interceptor.service';

import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';

import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';

import { EducacionComponent } from './componentes/educacion/educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';



import { AuthService } from './servicios/auth.service';
import { EducacionService } from './servicios/educacion.service';
import { ExperienciaService } from './servicios/experiencia.service';
import { SkillService } from './servicios/skill.service';
import { TokenService } from './servicios/token.service';

import { NotFoundComponent } from './componentes/not-found/not-found.component';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { HysComponent } from './componentes/hys/hys.component';
import { NewSkillComponent } from './componentes/hys/new-skill.component';
import { EditSkillComponent } from './componentes/hys/edit-skill.component';



@NgModule({

/*Aquí se listan los componentes u otros artefactos que incluye este módulo. */
  declarations: [

    AppComponent,

    NavComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeComponent,
    ProyectosComponent,
    FooterComponent,

    LoginComponent,

    EducacionComponent,
    EditEducacionComponent,
    NewEducacionComponent,

    ExperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    
    //NotFoundComponent,

    HysComponent,
    NewSkillComponent,
    EditSkillComponent,
    
  ],

/*imports: modulos exportados, son importaciones necesarias.*/
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  /*BrowserAnimationsModule,*/
    FormsModule,
    NgCircleProgressModule.forRoot({}),

  ],

/*Enumera los proveedores de servicios necesarios. */
  providers: [
    interceptorProvider,
    PersonaService,
    AuthService,
    EducacionService,
    ExperienciaService,
    InterceptorService,
    SkillService,
    TokenService,

  ],

  /*El componente raíz que Angular crea e inserta en la página web de host index.html */
  bootstrap: [AppComponent]
})
export class AppModule { }
