import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { BodyComponent } from './pages/body/body.component';
import { UsersComponent } from './pages/users/users.component';
import { MediaComponent } from './pages/media/media.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPageComponent,
    SidenavComponent,
    DashboardComponent,
    SettingsComponent,
    StatisticsComponent,
    BodyComponent,
    UsersComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
