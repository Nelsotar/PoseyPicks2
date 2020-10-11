class DRA18 extends Phaser.Scene{

  constructor(){
    super({key:'DRA18'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("dream");
    artBox(this, 'dra7', 'dra7Anim');
    initialDialogue(this, 1, "Moneeey?", "posey");
  }

  update(){
    checkNextScene(this, 2, "DRA18", "DRA19");
  }
}
