class DRA15 extends Phaser.Scene{

  constructor(){
    super({key:'DRA15'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("chirp");
    artBox(this, 'dra5', 'dra5Anim2');
    initialDialogue(this, 1, "I'll be here, leading the next wave of promising young professionals!", "posey");
  }

  update(){
    checkNextScene(this, 2, "DRA15", "DRA16");
  }
}
