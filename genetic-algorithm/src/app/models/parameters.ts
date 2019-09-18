export class Parameter {
    
    public populationSize : number;  

    public mutationRate: number; 

    public crossoverRate: number;    

    public useElitism : boolean;        

    public maxGenerations : number;
    
    public moveNorthReward : number;

    public moveSouthReward : number;

    public moveEastReward : number;

    public moveWestReward : number;

    public completedLabirynthReward: number;

    public crossedWallPenalty: number;

    public undoMovementPenalty : number

    public outOfBoundsPenalty : number;

    constructor(){
        this.populationSize = 5000;
        this.mutationRate = 30;
        this.crossoverRate = 80;
        this.useElitism = true;
        this.maxGenerations = 30;
        this.moveNorthReward = 300;
        this.moveSouthReward = 200;
        this.moveEastReward = 200;
        this.moveWestReward = 300;
        this.completedLabirynthReward = 700;
        this.crossedWallPenalty = 500;
        this.undoMovementPenalty = 300;
        this.outOfBoundsPenalty = 1000;
    }
}