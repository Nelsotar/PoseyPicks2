class WC24 extends Phaser.Scene{

  constructor(){
    super({key:'WC24'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmf2', 'wcmf2Anim2');
    initialDialogue(this, 3, "Excuse me, Bus?? Cookleigh isn't feeling well.", "posey");
  }

  update(){
    checkNextScene(this, 2, 'WC24', 'WC25');
  }
}
