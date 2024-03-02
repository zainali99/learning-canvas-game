class Enemy extends Entity{
    constructor(){
        super()
        this.group = "enemy"
        this.width = 50;
        this.height = 50;
        this.x=40;
        this.y=50;
        this.speed = 3;
        this.currentSpeed=0;
        this.game = null;

    }

    move(){
        const player = this.game.entities['player']
        var d=this.game.distance(this.x, player.x, this.y, player.y)
        if (this.x - 80 < player.x) {
            this.x +=this.speed;
        }
        if (this.x + 80 > player.x) {
            this.x -=this.speed;
        }
        if (this.y - 100 < player.y) {
            this.y +=this.speed;
        }
        if (this.y + 100 > player.y) {
            this.y -=this.speed;
        }
        console.log(this.x - 40, player.x)
    }

    render(game){
        this.game=game;
        game.context.beginPath();
        // this.x = game.canvas.width / 2;
        // this.y = game.canvas.height / 2 - 20;

        this.move()

        game.context.rect(this.x, this.y, this.width, this.height);
        game.context.fillStyle = 'red'
        game.context.fill()
        game.context.stroke();

    }




}