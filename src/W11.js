class W11 extends Phaser.Scene{

  constructor(){
    super({key:'W11'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, 'bgm_broom');
    artBox(this, 'wb2', 'wb2Anim4');
    initialDialogue(this, 18, "I'm sad now.", "hb");
  }

  update(){
    checkNextDialogue(this, 2, 18, "Maybe I'll feel better if I make fun of you some more.", "hb");
    checkNextScene(this, 3, 'W11', 'W12');
  }
}
