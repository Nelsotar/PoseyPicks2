class DRA7 extends Phaser.Scene{

  constructor(){
    super({key:'DRA7'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'dra3', 'dra3Anim3');
    initialDialogue(this, 9, "...But I do respect your persistence. You may remain here if you pass the ultimate responsibility test...", "rd");
  }

  update(){
    checkNextScene(this, 2, "DRA7", "DRA8");
  }
}
