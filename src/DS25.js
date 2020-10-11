class DS25 extends Phaser.Scene{

  constructor(){
    super({key:'DS25'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("chirp");
    artBox(this, 'ds1', 'ds1Anim4');
    initialDialogue(this, 0, "Posey took out a pumpkin!", "narrator");
  }

  update(){
    checkNextScene(this, 2, "DS25", "DS26");
  }
}
