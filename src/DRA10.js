class DRA10 extends Phaser.Scene{

  constructor(){
    super({key:'DRA10'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'dra4', 'dra4Anim2');
    initialDialogue(this, 1, "I'm friendly and I work well with others, even smelly people!", "posey");
  }

  update(){
    checkNextScene(this, 2, "DRA10", "DRA11");
  }
}
