class DRR6 extends Phaser.Scene{

  constructor(){
    super({key:'DRR6'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("woop");
    artBox(this, 'drr1', 'drr1Anim4');
    initialDialogue(this, 1, "Heehee, here I am!", "posey");
  }

  update(){
    checkNextScene(this, 2, "DRR6", "DRR7");
  }
}
