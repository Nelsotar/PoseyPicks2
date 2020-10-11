class WC68 extends Phaser.Scene{

  constructor(){
    super({key:'WC68'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcm2', 'wcm2Anim2');
    initialDialogue(this, 19, "What if we go to Happy Bus Land?", "cookleigh");
  }

  update(){
    checkNextScene(this, 2, 'WC68', 'WC69');
  }
}
