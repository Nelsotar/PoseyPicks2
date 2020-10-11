class WC69 extends Phaser.Scene{

  constructor(){
    super({key:'WC69'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcm2', 'wcm2Anim4');
    initialDialogue(this, 32, "Ohh..... alright, alright! I'm in!!", "bus");
  }

  update(){
    checkNextScene(this, 2, 'WC69', 'WC70');
  }
}
