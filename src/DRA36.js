class DRA36 extends Phaser.Scene{

  constructor(){
    super({key:'DRA36'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'dra6e2', 'dra6e2Anim');
    initialDialogue(this, 9, "You know, that is all I needed to hear. Very well. You're hired!", "rd");
  }

  update(){
    checkNextScene(this, 2, 'DRA36','DRA37');
  }
}
