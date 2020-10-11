class W6 extends Phaser.Scene{

  constructor(){
    super({key:'W6'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    broom = true;
    destroyAndPlayMusic(this, 'bgm_broom');
    artBox(this, 'wb1', 'wb1Anim2');
    initialDialogue(this, 1, "Hi old broom, how are you??", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 25, "...", "broom");
    checkNextScene(this, 3, 'W6', 'W7');
  }
}
