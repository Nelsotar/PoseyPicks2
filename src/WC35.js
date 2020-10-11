class WC35 extends Phaser.Scene{

  constructor(){
    super({key:'WC35'});
  }

  preload(){

  }

  create(){
    destroyAndPlayMusic(this, "bgm_cityloop");
    setUpScene(this);
    artBox(this, 'wcmf3', 'wcmf3Anim4');
    initialDialogue(this, 34, "Is she gonna be okay, Dr. Fridge?", "bus");
  }

  update(){
    checkNextDialogue(this, 2, 37, 'Sure, why not.', 'fridge');
    checkNextDialogue(this, 3, 33, 'Ahhh what a relief...', 'bus');
    checkNextScene(this, 4, 'WC35', 'WC103');
  }
}
