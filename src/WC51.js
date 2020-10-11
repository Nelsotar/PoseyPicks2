class WC51 extends Phaser.Scene{

  constructor(){
    super({key:'WC51'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcm4', 'wcm4Anim3');
    initialDialogue(this, 3, "Aw, okay. We understand.", "posey");
  }

  update(){
    checkNextScene(this, 2, 'WC51', 'WC52');
  }
}
