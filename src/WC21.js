class WC21 extends Phaser.Scene{

  constructor(){
    super({key:'WC21'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmf1', 'wcmf1Anim4');
    initialDialogue(this, 1, "You can pretend to be sick! Let's see your best sick face.", "posey");
  }

  update(){
    checkNextScene(this, 2, 'WC21', 'WC22');
  }
}
