class DRA14 extends Phaser.Scene{

  constructor(){
    super({key:'DRA14'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'dra4', 'dra4Anim5');
    initialDialogue(this, 9, "Very impressive, especially the poo angle.", "rd");
  }

  update(){
    checkNextScene(this, 2, "DRA14", "DRA12");
  }
}
