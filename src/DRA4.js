class DRA4 extends Phaser.Scene{

  constructor(){
    super({key:'DRA4'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'dra2', 'dra2Anim3');
    initialDialogue(this, 3, "Responsibility Demon?! How did you get here?!", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 10, "I actually am a young professional, for my species.", "rd");
    checkNextScene(this, 3, "DRA4", "DRA5");
  }
}
