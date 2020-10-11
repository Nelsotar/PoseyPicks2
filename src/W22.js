class W22 extends Phaser.Scene{

  constructor(){
    super({key:'W22'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, 'bgm_cityloop');
    artBox(this, 'wb4', 'wb4Anim2');
    initialDialogue(this, 1, "You should try talking to a broom. It's really soothing.", "posey");
  }

  update(){
    checkNextScene(this, 2, 'W22', 'W23');
  }
}
