class WC26 extends Phaser.Scene{

  constructor(){
    super({key:'WC26'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, "timewarp");
    artBox(this, 'wcmf3', 'wcmf3Anim5');
    initialDialogue(this, 33, "ANALYZING...", "bus");
  }

  update(){
    checkNextScene(this, 2, 'WC26', 'WC27');
  }
}
