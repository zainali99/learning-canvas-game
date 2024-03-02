
class Canvas {
    constructor(){
        this.canvas = document.querySelector('canvas')
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        this.entities = {}
        // this.ctx = this.context.bind(this)
        this.secondsPassed=0;
        this.oldTimeStamp=0;
        this.fps=0;
        this.canvas.style.border="1px solid";
        // this.distance=this.distance;
    }
    
    distance(x1,x2,y1,y2){
        var a = x1 - x2;
        var b = y1 - y2;
        return Math.sqrt( a*a + b*b );
    }


    loop(timeStamp){

        // Calculate the number of seconds passed since the last frame
        this.secondsPassed = (timeStamp - this.oldTimeStamp) / 1000;
        this.oldTimeStamp = timeStamp;

        // Calculate fps
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.fps = Math.round(1 / this.secondsPassed);
        this.context.font = "24px serif";
        this.context.fillText("FPS: "+this.fps, 20, 20);

        for(let entity in this.entities){
            this.entities[entity].render(this)
        }





        window.requestAnimationFrame(this.loop.bind(this))

    }
    init(){
        console.log(this.entities)
        window.requestAnimationFrame(this.loop.bind(this))
    }

}