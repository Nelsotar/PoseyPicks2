class DRA23 extends Phaser.Scene{

  constructor(){
    super({key:'DRA23'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("dream");
    artBox(this, 'dra8', 'dra8Anim');
    initialDialogue(this, 1, "FIVE HUNDRED MONEY", "posey");
  }

  update(){
    checkNextScene(this, 2, "DRA23", "DRA24");
  }
}
