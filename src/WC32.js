class WC32 extends Phaser.Scene{

  constructor(){
    super({key:'WC32'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, "timewarp");
    artBox(this, 'wcmf3', 'wcmf3Anim');
    initialDialogue(this, 33, "ANALYZING...", "bus");
  }

  update(){
    checkNextScene(this, 2, 'WC32', 'WC33');
  }
}
