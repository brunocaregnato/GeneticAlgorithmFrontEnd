import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/sessions.service';
import { Parameter } from 'src/app/models/parameters';
import { Maze } from 'src/app/models/maze';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-labyrinth',
  templateUrl: './labyrinth.component.html',
  styleUrls: ['./labyrinth.component.css']
})  
export class LabyrinthComponent implements OnInit {

    private _length: number = 40;
    private _maze: Maze;
    private _canvas: HTMLCanvasElement;
    private _cellPixels: number = 40;

    public reachedMaxGenerations: string;
    public generationsExecuted: number;
    public bestPath: any;
    public bestPathFitness: number;

  constructor(private _sessionService : SessionService,
              private _spinner: NgxSpinnerService) { }

  ngOnInit() { 
  }

  public draw(parameters : Parameter, id : string){
    this._spinner.show();
    this.clearFields();
    this._canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this._maze = new Maze();
    this._canvas.width = 10 * this._length;
    this._canvas.height = 10 * this._length;
    this._maze.drawMaze(this._canvas, this._length);

    this._sessionService.postSessionWithId(id, parameters)
    .subscribe(returnValue => {
      returnValue.reachedMaxGenerations ? this.reachedMaxGenerations = "Sim": this.reachedMaxGenerations = "Não";
      this.generationsExecuted = returnValue.generationsExecuted;
      this.bestPath = returnValue.bestPath;
      this.bestPathFitness = returnValue.bestPathFitness;
      this.drawPath(this.bestPath, this._canvas);
    });
  }

  private drawPath(path : any, canvas : HTMLCanvasElement){
    
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.rect(0, 398, 20, 0.5);
    ctx.fill();
    ctx.moveTo(20, 10 * this._cellPixels);

    path.forEach(coordenate => {
        ctx.lineTo((coordenate.x + 0.5) * this._cellPixels,(coordenate.y + 0.5) * this._cellPixels)
        ctx.stroke();
    });

    this._spinner.hide();
  }

  private clearFields(){
    this.reachedMaxGenerations = undefined;
    this.generationsExecuted = undefined;
    this.bestPath = undefined;
    this.bestPathFitness = undefined;
  }

}