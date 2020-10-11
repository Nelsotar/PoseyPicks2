class W26 extends Phaser.Scene{

  constructor(){
    super({key:'W26'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wb5', 'wb5Anim4');
    initialDialogue(this, 15, "Aw, this really is nice. Thanks, Posey and broom... I'm sorry I was mean to you.", "hb");
  }

  update(){
    checkNextScene(this, 2, 'W26', 'W27');
  }
}
