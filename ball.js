class Ball extends Entity{
    constructor(){
        super()
        this.group = "ball"
        this.width = 20;
        this.height = 20;
        this.x=3;
        this.y=50;  
        this.speed = 5;
        this.currentSpeed=0;

    }

    move(){

        
        
    }

    render(game){
        game.context.beginPath();
        // this.x = game.canvas.width / 2;
        // this.y = game.canvas.height / 2 - 20;

        this.move()

        game.context.rect(this.x, this.y, this.width, this.height);
        game.context.fillStyle = 'orange'
        game.context.fill()
        game.context.stroke();
        
    }




}