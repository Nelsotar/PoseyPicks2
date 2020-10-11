class DRA5 extends Phaser.Scene{

  constructor(){
    super({key:'DRA5'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this,'dra3', 'dra3Anim');
    initialDialogue(this, 1, "Really? Can I add you to my contacts?", "posey");
  }

  update(){
    checkNextScene(this, 2, "DRA5", "DRA6");
  }
}
