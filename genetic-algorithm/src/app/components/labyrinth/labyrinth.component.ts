import { Component, OnInit } from '@angular/core';
import { Quadrant } from 'src/app/models/quadrant';
import { SessionService } from 'src/app/services/sessions.service';
import { Parameter } from 'src/app/models/parameters';

@Component({
  selector: 'app-labyrinth',
  templateUrl: './labyrinth.component.html',
  styleUrls: ['./labyrinth.component.css']
})
export class LabyrinthComponent implements OnInit {

  public map : Array<Array<Quadrant>> =  [[],[],[],[],[],[],[],[],[],
                                          [],[],[],[],[],[],[],[],[],
                                          [],[],[],[],[],[],[],[],[],
                                          [],[],[],[],[],[],[],[],[],
                                          [],[],[],[],[],[],[],[],[],
                                          [],[],[],[],[],[],[],[],[],
                                          [],[],[],[],[],[],[],[],[],
                                          [],[],[],[],[],[],[],[],[],
                                          [],[],[],[],[],[],[],[],[],
                                          [],[],[],[],[],[],[],[],[]];

  constructor(private _sessionService : SessionService) { }

  ngOnInit() { 
  }

  public drawLabyrinth(parameters : Parameter, id : string){

    this.initializeMap();

    let canvas = <HTMLCanvasElement> document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let width = canvas.width;
    let blockSize = width/12;    
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, width, width);
    ctx.fillStyle="black";

    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {

        if(this.map[y][x].north){
          ctx.strokeRect(x*blockSize, y*blockSize, blockSize, 0);
          ctx.lineTo(x*blockSize, y*blockSize);
        }

        if(this.map[y][x].west){
          ctx.fillRect(x*blockSize, y*blockSize, 1, blockSize);
          ctx.moveTo(x*blockSize, y*blockSize);
        }
        
        if(this.map[y][x].south){
          ctx.strokeRect(x*blockSize, y*blockSize+34, blockSize, 0);
          ctx.moveTo(y*blockSize, x*blockSize);
        }
        
        if(this.map[y][x].east){
          ctx.fillRect(x*blockSize+34, y*blockSize, 1, blockSize);
          ctx.moveTo(x*blockSize, y*blockSize);
        }
      }
    }

    this._sessionService.postSessionWithId(id, parameters)
    .subscribe(value => {
      this.drawPath(value);
      console.log("value: ", value);
    });

  }

  private drawPath(value : any){
    let canvas = <HTMLCanvasElement> document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let width = canvas.width;
    let blockSize = width/12;    

    ctx.beginPath();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle="green";
    ctx.strokeStyle = "green";
    
    ctx.beginPath();       
    
    let array = value.bestPath;

    for (let i = 0; i < array.length; i++) {

        let x = array[i].x;
        let y = array[i].y;

        if(x == 0 && y == 8){
            ctx.strokeRect(y, x, blockSize, 0);
            ctx.lineTo(y, x);
        }

        console.log("pos: ", this.map[array[i].x][array[i].y]);
        ctx.stroke();
    }

    

    console.log("array:" , array);


  }

  private initializeMap(){

    // 0
    this.map[0][0] =
    {
        north: true,
        south:  false,
        east:  false,
        west:   true
    },
    this.map[0][1] =
    {
        north: true,
        south:  true,
        east:  false,
        west:   false
    },
    this.map[0][2] =
    {
        north: true,
        south:  true,
        east:  false,
        west:   false
    },
    this.map[0][3] =
    {
        north: true,
        south:  true,
        east:  false,
        west:   false
    },
    this.map[0][4] =
    {
        north: true,
        south:  false,
        east:  true,
        west:   false
    },
    this.map[0][5] =
    {
        north: true,
        south:  false,
        east:  false,
        west:   true
    },
    this.map[0][6] =
    {
        north: true,
        south:  true,
        east:  false,
        west:   false
    },
    this.map[0][7] =
    {
        north: true,
        south:  true,
        east:  false,
        west:   false
    },
    this.map[0][8] =
    {
        north: true,
        south:  false,
        east:  true,
        west:   false
    },
    this.map[0][9] =
    {
        north: true,
        east:  false,
        south:  false,
        west:   true
    }
      
    // 1        
    this.map[1][0] =
    {
        north: false,
        east:  true,
        south:  false,
        west:   true
    },
    this.map[1][1] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   true
    },
    this.map[1][2] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[1][3] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[1][4] =
    {
        north: false,
        east:  true,
        south:  true,
        west:   false
    },
    this.map[1][5] =
    {
        north: false,
        east:  true,
        south:  false,
        west:   true
    },
    this.map[1][6] =
    {
        north: true,
        east:  false,
        south:  false,
        west:   true
    },
    this.map[1][7] =
    {
        north: true,
        east:  true,
        south:  false,
        west:   false
    },
    this.map[1][8] =
    {
        north: false,
        east:  false,
        south:  true,
        west:   true
    },
    this.map[1][9] =
    {
        north: false,
        east:  true,
        south:  true,
        west:   false
    }
        
    // 2        
    this.map[2][0] =
    {
        north: false,
        east:  false,
        south:  false,
        west:   true
    },
    this.map[2][1] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[2][2] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[2][3] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[2][4] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[2][5] =
    {
        north: false,
        east:  true,
        south:  false,
        west:   false
    },
    this.map[2][6] =
    {
        north: false,
        east:  true,
        south:  true,
        west:   true
    },
    this.map[2][7] =
    {
        north: false,
        east:  false,
        south:  false,
        west:   true
    },
    this.map[2][8] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[2][9] =
    {
        north: true,
        east:  true,
        south:  false,
        west:   false
    }
        
    // 3
    this.map[3][0] =
    {
        north: false,
        east:  false,
        south:  true,
        west:   true
    },
    this.map[3][1] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[3][2] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[3][3] =
    {
        north: true,
        east:  true,
        south:  false,
        west:   false
    },
    this.map[3][4] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   true
    },
    this.map[3][5] =
    {
        north: false,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[3][6] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[3][7] =
    {
        north: false,
        east:  true,
        south:  true,
        west:   false
    },
    this.map[3][8] =
    {
        north: true,
        east:  true,
        south:  false,
        west:   true
    },
    this.map[3][9] =
    {
        north: false,
        east:  true,
        south:  false,
        west:   true
    }
        
    // 4
    this.map[4][0] =
    {
        north: true,
        east:  false,
        south:  false,
        west:   true
    },
    this.map[4][1] =
    {
        north: true,
        east:  true,
        south:  true,
        west:   false
    },
    this.map[4][2] =
    {
        north: true,
        east:  false,
        south:  false,
        west:   true
    },
    this.map[4][3] =
    {
        north: false,
        east:  true,
        south:  false,
        west:   false
    },
    this.map[4][4] =
    {
        north: true,
        east:  false,
        south:  false,
        west:   true
    },
    this.map[4][5] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[4][6] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[4][7] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[4][8] =
    {
        north: false,
        east:  true,
        south:  true,
        west:   false
    },
    this.map[4][9] =
    {
        north: false,
        east:  false,
        south:  true,
        west:   true
    }
        
    // 5
    this.map[5][0] =
    {
        north: false,
        east:  false,
        south:  true,
        west:   true
    },
    this.map[5][1] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[5][2] =
    {
        north: false,
        east:  true,
        south:  false,
        west:   false
    },
    this.map[5][3] =
    {
        north: false,
        east:  false,
        south:  false,
        west:   true
    },
    this.map[5][4] =
    {
        north: false,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[5][5] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[5][6] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[5][7] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[5][8] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[5][9] =
    {
        north: true,
        east:  true,
        south:  false,
        west:   false
    }
        
    // 6
    this.map[6][0] =
    {
        north: true,
        east:  false,
        south:  false,
        west:   true
    },
    this.map[6][1] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[6][2] =
    {
        north: false,
        east:  true,
        south:  true,
        west:   false
    },
    this.map[6][3] =
    {
        north: false,
        east:  true,
        south:  false,
        west:   true
    },
    this.map[6][4] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   true
    },
    this.map[6][5] =
    {
        north: true,
        east:  false,
        south:  false,
        west:   false
    },
    this.map[6][6] =
    {
        north: true,
        east:  true,
        south:  false,
        west:   false
    },
    this.map[6][7] =
    {
        north: true,
        east:  false,
        south:  false,
        west:   true
    },
    this.map[6][8] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[6][9] =
    {
        north: false,
        east:  true,
        south:  true,
        west:   false
    }
        
    // 7
    this.map[7][0] =
    {
        north: false,
        east:  false,
        south:  false,
        west:   true
    },
    this.map[7][1] =
    {
        north: true,
        east:  false,
        south:  false,
        west:   false
    },
    this.map[7][2] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[7][3] =
    {
        north: false,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[7][4] =
    {
        north: true,
        east:  false,
        south:  false,
        west:   false
    },
    this.map[7][5] =
    {
        north: false,
        east:  true,
        south:  false,
        west:   false
    },
    this.map[7][6] =
    {
        north: false,
        east:  true,
        south:  false,
        west:   true
    },
    this.map[7][7] =
    {
        north: false,
        east:  false,
        south:  true,
        west:   true
    },
    this.map[7][8] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[7][9] =
    {
        north: true,
        east:  true,
        south:  false,
        west:   false
    }
        
    // 8
    this.map[8][0] =
    {
        north: false,
        east:  true,
        south:  false,
        west:   true
    },
    this.map[8][1] =
    {
        north: false,
        east:  true,
        south:  false,
        west:   true
    },
    this.map[8][2] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   true
    },
    this.map[8][3] =
    {
        north: true,
        east:  true,
        south:  true,
        west:   false
    },
    this.map[8][4] =
    {
        north: false,
        east:  true,
        south:  false,
        west:   true
    },
    this.map[8][5] =
    {
        north: false,
        east:  true,
        south:  false,
        west:   true
    },
    this.map[8][6] =
    {
        north: false,
        east:  false,
        south:  true,
        west:   true
    },
    this.map[8][7] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[8][8] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[8][9] =
    {
        north: false,
        east:  true,
        south:  false,
        west:   false
    }
      
    // 9
    this.map[9][0] =
    {
        north: false,
        east:  true,
        south:  true,
        west:   false
    },
    this.map[9][1] =
    {
        north: false,
        east:  false,
        south:  true,
        west:   true
    },
    this.map[9][2] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[9][3] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[9][4] =
    {
        north: false,
        east:  true,
        south:  true,
        west:   false
    },
    this.map[9][5] =
    {
        north: false,
        east:  false,
        south:  true,
        west:   true
    },
    this.map[9][6] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[9][7] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[9][8] =
    {
        north: true,
        east:  false,
        south:  true,
        west:   false
    },
    this.map[9][9] =
    {
        north: false,
        east:  true,
        south:  true,
        west:   false
    }
  }

}
