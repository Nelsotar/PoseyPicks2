class W19 extends Phaser.Scene{

  constructor(){
    super({key:'W19'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wb5', 'wb5Anim');
    initialDialogue(this, 1, "I know a dog you could talk to!", "posey");
  }

  update(){
    checkNextScene(this, 2, 'W19', 'W20');
  }
}
