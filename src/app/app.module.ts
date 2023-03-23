import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



//Rutas

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { TituloComponent } from './componentes/titulo/titulo.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { DatospersonalesComponent } from './componentes/datospersonales/datospersonales.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { DashboardComponent } from './modals/dashboard/dashboard.component';
import { IndexComponent } from './componentes/index/index.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { DashbannerComponent } from './modals/dashboard/dashbanner/dashbanner.component';
import { DashcursosComponent } from './modals/dashboard/dashcursos/dashcursos.component';
import { DashdatosperComponent } from './modals/dashboard/dashdatosper/dashdatosper.component';
import { DasheducacionComponent } from './modals/dashboard/dasheducacion/dasheducacion.component';
import { DashexpeComponent } from './modals/dashboard/dashexpe/dashexpe.component';
import { DashredesComponent } from './modals/dashboard/dashredes/dashredes.component';
import { DashskillsComponent } from './modals/dashboard/dashskills/dashskills.component';
import { DashsobremiComponent } from './modals/dashboard/dashsobremi/dashsobremi.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { DashnavbarComponent } from './modals/dashboard/dashnavbar/dashnavbar.component';
import { FooterComponent } from './componentes/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    SobremiComponent,
    BannerComponent,
    TituloComponent,
    ExperienciaComponent,
    EducacionComponent,
    DatospersonalesComponent,
    CursosComponent,
    DashboardComponent,
    IndexComponent,
    SkillsComponent,
    DashbannerComponent,
    DashcursosComponent,
    DashdatosperComponent,
    DasheducacionComponent,
    DashexpeComponent,
    DashredesComponent,
    DashskillsComponent,
    DashsobremiComponent,
    LogoutComponent,
    DashnavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
