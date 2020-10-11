class DRR21 extends Phaser.Scene{

  constructor(){
    super({key:'DRR21'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("storm");
    artBox(this, 'drr2', 'drr2Anim4');
    initialDialogue(this, 31, "*GASP*", "rd");
  }

  update(){
    checkNextDialogue(this, 2, 31, "YOU'RE THE IRRESPONSIBILITY DEMON!!!", "rd");
    checkNextScene(this, 3, "DRR21", "DRR22");
  }
}
