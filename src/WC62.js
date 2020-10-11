class WC62 extends Phaser.Scene{

  constructor(){
    super({key:'WC62'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcms1', 'wcms1Anim2');
    initialDialogue(this, 2, "Hehe", "posey");
  }

  update(){
    checkNextScene(this, 2, 'WC62', 'WC63');
  }
}
