class WC64 extends Phaser.Scene{

  constructor(){
    super({key:'WC64'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcms1', 'wcms1Anim4');
    initialDialogue(this, 38, "Your pity laughter, it nourishes me.", "stophanie");
  }

  update(){
    checkNextScene(this, 2, 'WC64', 'WC65');
  }
}
