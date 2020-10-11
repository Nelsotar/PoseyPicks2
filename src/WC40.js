class WC40 extends Phaser.Scene{

  constructor(){
    super({key:'WC40'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmv2', 'wcmv2Anim');
    initialDialogue(this, 1, "Ah, let's skip ahead just a little!", "posey");
  }

  update(){
    checkNextScene(this, 2, 'WC40', 'WC41');
  }
}
