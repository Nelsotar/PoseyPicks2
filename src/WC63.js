class WC63 extends Phaser.Scene{

  constructor(){
    super({key:'WC63'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcms1', 'wcms1Anim3');
    initialDialogue(this, 20, "Hehe", "cookleigh");
  }

  update(){
    checkNextScene(this, 2, 'WC63', 'WC64');
  }
}
