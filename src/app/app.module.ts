import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule    } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './employee/list/list.component';
import { NavMenuComponent } from './nav/nav-menu/nav-menu.component';
import { CreateComponent } from './employee/create/create.component';

const appRouts: Route[] = [
  {path: 'employee-list' , component: ListComponent},
  {path: 'employee-create', component: CreateComponent},
  {path: '', redirectTo:'employee-list', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavMenuComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouts),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
