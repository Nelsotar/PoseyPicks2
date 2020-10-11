class WC84 extends Phaser.Scene{

  constructor(){
    super({key:'WC84'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcs1', 'wcs1Anim');
    initialDialogue(this, 27, "Yo stop being like that", "posey");
  }

  update(){
    checkNextScene(this, 2, 'WC84', 'WC85');
  }
}
