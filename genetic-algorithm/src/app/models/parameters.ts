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
        this.mutationRate = 50;
        this.crossoverRate = 50;
        this.useElitism = true;
        this.maxGenerations = 30;
        this.moveNorthReward = 150;
        this.moveSouthReward = 150;
        this.moveEastReward = 150;
        this.moveWestReward = 150;
        this.completedLabirynthReward = 300;
        this.crossedWallPenalty = 150;
        this.undoMovementPenalty = 150;
        this.outOfBoundsPenalty = 500;
    }
}