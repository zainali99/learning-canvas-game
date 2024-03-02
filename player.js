class Player extends Entity{
    constructor(){
        super()
        this.group = "player"
        this.width = 40;
        this.height = 40;
        this.x=0;
        this.y=0;
    }
    render(game){
        game.context.beginPath();
        this.x = game.canvas.width / 2;
        this.y = game.canvas.height / 2 - 20;



        game.context.rect(this.x, this.y, this.width, this.height);
        game.context.fill()
        game.context.stroke();
    }


}