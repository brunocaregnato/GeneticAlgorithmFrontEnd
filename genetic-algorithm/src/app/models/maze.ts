import { Quadrant } from './quadrant';

export class Maze {
  public readonly cells: Array<Array<Quadrant>> = [];

  /**
   * Inicializa o labirinto 
   */
  constructor() {

        for (let index = 0; index < 10; index++) this.cells[index] = []; 

        //0
        this.cells[0][0] = new Quadrant(0, 0, true, false, false, true);
        
        this.cells[0][1] = new Quadrant(0, 1, true, false, true, false);

        this.cells[0][2] = new Quadrant(0, 2, true, false, true, false);

        this.cells[0][3] = new Quadrant(0, 3, true, false, true, false);

        this.cells[0][4] = new Quadrant(0, 4, true, true, false, false);

        this.cells[0][5] = new Quadrant(0, 5, true, false, false, true);

        this.cells[0][6] = new Quadrant(0, 6, true, false, true, false);

        this.cells[0][7] = new Quadrant(0, 7, true, false, true, false);

        this.cells[0][8] = new Quadrant(0, 8, true, true, false, false);

        this.cells[0][9] = new Quadrant(0, 9, true, false, false, true);
          
        // 1        
        this.cells[1][0] = new Quadrant(1, 0, false, true, false, true);

        this.cells[1][1] = new Quadrant(1, 1, true, false, true, true);

        this.cells[1][2] = new Quadrant(1, 2, true, false, true, false);

        this.cells[1][3] = new Quadrant(1, 3, true, false, true, false);

        this.cells[1][4] = new Quadrant(1, 4, false, true, true, false);

        this.cells[1][5] = new Quadrant(1, 5, false, true, false, true);

        this.cells[1][6] = new Quadrant(1, 6, true, false, false, true);

        this.cells[1][7] = new Quadrant(1, 7, true, true, false, false);

        this.cells[1][8] = new Quadrant(1, 8, false, false, true, true);

        this.cells[1][9] = new Quadrant(1, 9, false, true, true, false);

        // 2        
        this.cells[2][0] = new Quadrant(2, 0, false, false, false, true);
        
        this.cells[2][1] = new Quadrant(2, 1, true, false, true, false);

        this.cells[2][2] = new Quadrant(2, 2, true, false, true, false);

        this.cells[2][3] = new Quadrant(2, 3, true, false, true, false);
        
        this.cells[2][4] = new Quadrant(2, 4, true, false, true, false);
        
        this.cells[2][5] = new Quadrant(2, 5, false, true, false, false);

        this.cells[2][6] = new Quadrant(2, 6, false, true, true, true);

        this.cells[2][7] = new Quadrant(2, 7, false, false, false, true);
        
        this.cells[2][8] = new Quadrant(2, 8, true, false, true, false);

        this.cells[2][9] = new Quadrant(2, 9, true, true, false, false);
            
        // 3
        this.cells[3][0] = new Quadrant(3, 0, false, false, true, true);

        this.cells[3][1] = new Quadrant(3, 1, true, false, true, false);
        
        this.cells[3][2] = new Quadrant(3, 2, true, false, true, false);

        this.cells[3][3] = new Quadrant(3, 3, true, true, false, false);
        
        this.cells[3][4] = new Quadrant(3, 4, true, false, true, true);

        this.cells[3][5] = new Quadrant(3, 5, false, false, true, false);

        this.cells[3][6] = new Quadrant(3, 6, true, false, true, false);

        this.cells[3][7] = new Quadrant(3, 7, false, true, true, false);

        this.cells[3][8] = new Quadrant(3, 8, true, true, false, true);

        this.cells[3][9] = new Quadrant(3, 9, false, true, false, true);
            
        // 4
        this.cells[4][0] = new Quadrant(4, 0, true, false, false, true);
        
        this.cells[4][1] = new Quadrant(4, 1, true, true, true, false);

        this.cells[4][2] = new Quadrant(4, 2, true, false, false, true);

        this.cells[4][3] = new Quadrant(4, 3, false, true, false, false);

        this.cells[4][4] = new Quadrant(4, 4, true, false, false, true);

        this.cells[4][5] = new Quadrant(4, 5, true, false, true, false);
        
        this.cells[4][6] = new Quadrant(4, 6, true, false, true, false);

        this.cells[4][7] = new Quadrant(4, 7, true, false, true, false);

        this.cells[4][8] = new Quadrant(4, 8, false, true, true, false);

        this.cells[4][9] = new Quadrant(4, 9, false, false, true, true);
            
        // 5
        this.cells[5][0] = new Quadrant(5, 0, false, false, true, true);

        this.cells[5][1] = new Quadrant(5, 1, true, false, true, false);

        this.cells[5][2] = new Quadrant(5, 2, false, true, false, false);
        
        this.cells[5][3] = new Quadrant(5, 3, false, false, false, true);

        this.cells[5][4] = new Quadrant(5, 4, false, false, true, false);

        this.cells[5][5] = new Quadrant(5, 5, true, false, true, false);

        this.cells[5][6] = new Quadrant(5, 6, true, false, true, false);

        this.cells[5][7] = new Quadrant(5, 7, true, false, true, false);

        this.cells[5][8] = new Quadrant(5, 8, true, false, true, false);
        
        this.cells[5][9] = new Quadrant(5, 9, true, true, false, false);
            
        // 6
        this.cells[6][0] = new Quadrant(6, 0, true, false, false, true);

        this.cells[6][1] = new Quadrant(6, 1, true, false, true, false);
        
        this.cells[6][2] = new Quadrant(6, 2, false, true, true, false);

        this.cells[6][3] = new Quadrant(6, 3, false, true, false, true);

        this.cells[6][4] = new Quadrant(6, 4, true, false, true, true);

        this.cells[6][5] = new Quadrant(6, 5, true, false, false, false);

        this.cells[6][6] = new Quadrant(6, 6, true, true, false, false);

        this.cells[6][7] = new Quadrant(6, 7, true, false, false, true);

        this.cells[6][8] = new Quadrant(6, 8, true, false, true, false);

        this.cells[6][9] = new Quadrant(6, 9, false, true, true, false);
            
        // 7
        this.cells[7][0] = new Quadrant(7, 0, false, false, false, true);

        this.cells[7][1] = new Quadrant(7, 1, true, false, false, false);

        this.cells[7][2] = new Quadrant(7, 2, true, false, true, false);

        this.cells[7][3] = new Quadrant(7, 3, false, false, true, false);

        this.cells[7][4] = new Quadrant(7, 4, true, false, false, false);

        this.cells[7][5] = new Quadrant(7, 5, false, true, false, false);

        this.cells[7][6] = new Quadrant(7, 6, false, true, false, true);

        this.cells[7][7] = new Quadrant(7, 7, false, false, true, true);

        this.cells[7][8] = new Quadrant(7, 8, true, false, true, false);

        this.cells[7][9] = new Quadrant(7, 9, true, true, false, false);
            
        // 8
        this.cells[8][0] = new Quadrant(8, 0, false, true, false, true);

        this.cells[8][1] = new Quadrant(8, 1, false, true, false, true);

        this.cells[8][2] = new Quadrant(8, 2, true, false, true, true);

        this.cells[8][3] = new Quadrant(8, 3, true, true, true, false);

        this.cells[8][4] = new Quadrant(8, 4, false, true, false, true);

        this.cells[8][5] = new Quadrant(8, 5, false, true, false, true);

        this.cells[8][6] = new Quadrant(8, 6, false, false, true, true);

        this.cells[8][7] = new Quadrant(8, 7, true, false, true, false);

        this.cells[8][8] = new Quadrant(8, 8, true, false, true, false);

        this.cells[8][9] = new Quadrant(8, 9, false, true, false, false);
          
        // 9
        this.cells[9][0] = new Quadrant(9, 0, false, true, true, false);

        this.cells[9][1] = new Quadrant(9, 1, false, false, true, true);

        this.cells[9][2] = new Quadrant(9, 2, true, false, true, false);

        this.cells[9][3] = new Quadrant(9, 3, true, false, true, false);

        this.cells[9][4] = new Quadrant(9, 4, false, true, true, false);

        this.cells[9][5] = new Quadrant(9, 5, false, false, true, true);
        
        this.cells[9][6] = new Quadrant(9, 6, true, false, true, false);

        this.cells[9][7] = new Quadrant(9, 7, true, false, true, false);

        this.cells[9][8] = new Quadrant(9, 8, true, false, true, false);

        this.cells[9][9] = new Quadrant(9, 9, false, true, true, false);

  }

  drawMaze(canvas: HTMLCanvasElement, cellPixels: number, lineThickness = 2) {
    canvas = <HTMLCanvasElement>document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.lineWidth = lineThickness;
    this.cells.forEach(x =>
      x.forEach(c => {
        c.draw(ctx, cellPixels);
      })
    );
  }
}

