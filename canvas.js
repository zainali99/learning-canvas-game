
class Canvas {
    constructor(){
        this.canvas = document.querySelector('canvas')
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        this.entities = {}
        // this.ctx = this.context.bind(this)
        this.secondsPassed=0;
        this.oldTimeStamp=0;
        this.fps=0;
        this.canvas.style.border="1px solid"
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
        window.requestAnimationFrame(this.loop.bind(this))
    }

}