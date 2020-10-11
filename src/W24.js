class W24 extends Phaser.Scene{

  constructor(){
    super({key:'W24'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wb4', 'wb4Anim4');
    initialDialogue(this, 36, "Hi... broom.", "hb");
  }

  update(){
    checkNextScene(this, 2, 'W24', 'W25');
  }
}
