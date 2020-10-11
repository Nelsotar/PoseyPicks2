class WC6 extends Phaser.Scene{

  constructor(){
    super({key:'WC6'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmf1', 'wcmf1Anim');
    initialDialogue(this, 2, "Okay, okay. I'm still going, but I'll help you escape.", "posey");
  }

  update(){
    checkNextScene(this, 2, 'WC6', 'WC7');
  }
}
