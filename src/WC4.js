class WC4 extends Phaser.Scene{

  constructor(){
    super({key:'WC4'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcm5', 'wcm5Anim');
    initialDialogue(this, 2, "It's not always fun, but we should probably still go to school.", "posey");
  }

  update(){
    checkNextScene(this, 2, 'WC4', 'WC5');
  }
}
