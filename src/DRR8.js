class DRR8 extends Phaser.Scene{

  constructor(){
    super({key:'DRR8'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'drr4', 'drr4Anim');
    initialDialogue(this, 1, "I dunno", "posey");
  }

  update(){
    checkNextScene(this, 2, "DRR8", "DRR9");
  }
}
