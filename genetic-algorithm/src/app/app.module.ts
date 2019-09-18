import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule  } from '@angular/common/http';
import { LabyrinthComponent } from './components/labyrinth/labyrinth.component';
import { SessionService } from './services/sessions.service';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    AppComponent,
    LabyrinthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
    NgxSpinnerModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
