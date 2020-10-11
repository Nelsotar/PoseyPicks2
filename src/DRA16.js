class DRA16 extends Phaser.Scene{

  constructor(){
    super({key:'DRA16'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'dra5', 'dra5Anim3');
    initialDialogue(this, 9, "That's so darn responsible!! I love it!!", "rd");
  }

  update(){
    checkNextScene(this, 2, "DRA16", "DRA17");
  }
}
