class W15 extends Phaser.Scene{

  constructor(){
    super({key:'W15'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wb3', 'wb3Anim3');
    initialDialogue(this, 4, "Really?", "posey");
  }

  update(){
    checkNextScene(this, 2, 'W15', 'W16');
  }
}
