class WC85 extends Phaser.Scene{

  constructor(){
    super({key:'WC85'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcs1', 'wcs1Anim2');
    initialDialogue(this, 24, "Excuse me? Being like what?", "salton");
  }

  update(){
    checkNextScene(this, 2, 'WC85', 'WC86');
  }
}
