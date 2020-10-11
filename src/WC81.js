class WC81 extends Phaser.Scene{

  constructor(){
    super({key:'WC81'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wc2', 'wc2Anim2');
    initialDialogue(this, 27, "Don't worry, Cookleigh! I'll clear your name with Mr. Salton!", "posey");
  }

  update(){
    checkNextScene(this, 2, 'WC81', 'WC82');
  }
}
