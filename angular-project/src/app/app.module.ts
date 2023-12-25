import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';       // 3rd party lib for 2-way binding : ngModel

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RndComponent } from './rnd/rnd.component';
import { ContainerComponent } from './container/container.component';
import { StudentListComponent } from './container/student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    RndComponent,
    ContainerComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
