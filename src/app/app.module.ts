import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import { AddUserComponent } from './user-list/add-user/add-user.component';
import { UserDetailsComponent } from './user-list/user-details/user-details.component';
import {MatListModule} from "@angular/material/list";
import { MenuComponent } from './menu/menu.component';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { UpdateUserComponent } from './user-list/update-user/update-user.component';
import {RouterModule, Routes} from "@angular/router";
import { ConnexionComponent } from './connexion/connexion.component';
import {MatPaginatorModule} from "@angular/material/paginator";

export const routes: Routes = [
    //home page
    {path:'home', component:UserListComponent},
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'login', component:ConnexionComponent},
    {path:'add', component:AddUserComponent},
    {path:'update/:id', component:UpdateUserComponent},
    {path: 'details/:id', component:UserDetailsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent,
    UserDetailsComponent,
    MenuComponent,
    UpdateUserComponent,
    ConnexionComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatListModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        RouterModule.forRoot(routes),
        MatPaginatorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
