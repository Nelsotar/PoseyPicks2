class DRA6 extends Phaser.Scene{

  constructor(){
    super({key:'DRA6'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'dra3', 'dra3Anim2');
    initialDialogue(this, 10, "Do not network with me!! You do not belong here!!", "rd");
  }

  update(){
    checkNextScene(this, 2, "DRA6", "DRA7");
  }
}
