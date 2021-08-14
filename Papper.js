class Papper {

    constructor(x,y,width,height){

      var options={ 
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
        }
        this.ball=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.ball)
  
        
        }


        display(){
        fill("#FF00FF")
        
        ellipse(this.ball.position.x,this.ball.position.y,this.width,this.height)
        


     

     
        }
        

      }

