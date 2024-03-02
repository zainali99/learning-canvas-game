


window.addEventListener('DOMContentLoaded',function (){
    const canvas = new Canvas();
    const player = new Player();
    const enemy = new Enemy();


    const ball = new Ball();

    canvas.entities['player']=player;
    canvas.entities['enemy']=enemy;
    canvas.entities['ball']=ball;


    

    // start
    canvas.init();





})