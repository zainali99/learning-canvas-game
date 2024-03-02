class Player extends Entity{
    constructor(){
        super()
        this.group = "player"
        this.width = 40;
        this.height = 40;
        this.x=0;
        this.y=0;
        this.speed = 3;
        this.currentSpeed=0;
        this.keys = [];

        document.addEventListener('keydown', (e)=>{
            this.keys[e.key] = true;
            console.log(this.keys)
        });
        document.addEventListener('keyup', (e)=>{
            this.keys[e.key] = false;
        });
    }
    fire(){
        // spawn a ball entity
    }
    move(){
        if (this.keys["w"]){
            this.y -=this.speed;
        }
        if (this.keys["a"]){
            this.x -=this.speed;
        }
        if (this.keys["s"]){
            this.y += this.speed;
        }
        if (this.keys["d"]){
            this.x += this.speed;
        }
        
        
    }

    render(game){
        game.context.beginPath();
        // this.x = game.canvas.width / 2;
        // this.y = game.canvas.height / 2 - 20;

        this.move()

        game.context.rect(this.x, this.y, this.width, this.height);
        game.context.fillStyle = '#000'

        game.context.fill()
        game.context.stroke();
    }




}