class WC25 extends Phaser.Scene{

  constructor(){
    super({key:'WC25'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmf2', 'wcmf2Anim3');
    initialDialogue(this, 33, "Uh oh... let me examine her facial expression to determine how sick she is.", "bus");
  }

  update(){
    checkNextScene(this, 2, 'WC25', 'WC26');
  }
}
