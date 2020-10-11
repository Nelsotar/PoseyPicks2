class W23 extends Phaser.Scene{

  constructor(){
    super({key:'W23'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wb4', 'wb4Anim3');
    initialDialogue(this, 17, "Really? Well... alright.", "hb");
  }

  update(){
    checkNextScene(this, 2, 'W23', 'W24');
  }
}
