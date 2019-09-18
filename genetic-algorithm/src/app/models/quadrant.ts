export class Quadrant{

    constructor(public readonly row : number,
                public readonly col : number, 
                public north : boolean, 
                public east : boolean,
                public south : boolean,
                public west : boolean){} 

    /**
     * Desenha o quadrante no labirinto
     * @param ctx contexto do canvas
     * @param length tamanho do labirinto
     */
    public draw(ctx: CanvasRenderingContext2D, length: number) {
        if (this.north) {
          ctx.beginPath();
          ctx.moveTo(this.col * length, this.row * length);
          ctx.lineTo((this.col + 1) * length, this.row * length);
          ctx.stroke();
        }
        if (this.east) {
          ctx.beginPath();
          ctx.moveTo((this.col + 1) * length, this.row * length);
          ctx.lineTo((this.col + 1) * length, (this.row + 1) * length);
          ctx.stroke();
        }
        if (this.south) {
          ctx.beginPath();
          ctx.moveTo((this.col + 1) * length, (this.row + 1) * length);
          ctx.lineTo(this.col * length, (this.row + 1) * length);
          ctx.stroke();
        }
        if (this.west) {
          ctx.beginPath();
          ctx.moveTo(this.col * length, (this.row + 1) * length);
          ctx.lineTo(this.col * length, this.row * length);
          ctx.stroke();
        }
    }
}
