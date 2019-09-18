import { Component, OnInit, ViewChild } from '@angular/core';
import { Parameter } from './models/parameters';
import { HttpClient } from '@angular/common/http';
import { LabyrinthComponent } from './components/labyrinth/labyrinth.component';
import { SessionService } from './services/sessions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  @ViewChild('labyrinth', {static : true}) labyrinth : LabyrinthComponent;

  public title : string = 'Algoritmo Genético';
  public parameters : Parameter = new Parameter();

  constructor(private _sessionService : SessionService){}

  public ngOnInit(){
  }

  public sendInformations(){
    this._sessionService.postSession(this.parameters)
    .subscribe(returnValue => {
      this.labyrinth.draw(this.parameters, returnValue.id);   
    });
  }
}
