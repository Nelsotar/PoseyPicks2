class DRA11 extends Phaser.Scene{

  constructor(){
    super({key:'DRA11'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'dra4', 'dra4Anim3');
    initialDialogue(this, 9, "Good to know! Our staff is both highly skilled and scented.", "rd");
  }

  update(){
    checkNextScene(this, 2, "DRA11", "DRA12");
  }
}
