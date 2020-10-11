class W25 extends Phaser.Scene{

  constructor(){
    super({key:'W25'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wb4', 'wb4Anim5' );
    initialDialogue(this, 25, "Yo what's up I hope you're doing okay.", "broom");
  }

  update(){
    checkNextScene(this, 2, 'W25', 'W26');
  }
}
