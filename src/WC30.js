class WC30 extends Phaser.Scene{

  constructor(){
    super({key:'WC30'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmf2', 'wcmf2Anim5');
    initialDialogue(this, 3, "Excuse me, Bus?? Cookleigh isn't feeling well.", "posey");
  }

  update(){
    checkNextScene(this, 2, 'WC30', 'WC31');
  }
}
