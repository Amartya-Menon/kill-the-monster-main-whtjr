class Monster{

    constructor(x,y,width,height){
    var options = { 
       
        restitution : 1,
        friction : 1,
        
    }
       
      this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;
       
       this.image = loadImage("sprites/monster.jpg")
       
       World.add(world, this.body);
    
   
   }
   display(){
    
    push()
    translate(this.body.position.x,this.body.position.y)
    
    imageMode(CENTER)
    image(this.image,50,50,this.width,this.height)
    pop() 
   
 }
   
   }