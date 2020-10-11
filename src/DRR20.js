class DRR20 extends Phaser.Scene{

  constructor(){
    super({key:'DRR20'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'drr2', 'drr2Anim3');
    initialDialogue(this, 14, "You're... you're so irresponsible...", "rd");
  }

  update(){
    checkNextScene(this, 2, "DRR20", "DRR21");
  }
}
