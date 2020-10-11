class DRR15 extends Phaser.Scene{

  constructor(){
    super({key:'DRR15'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    oldDemon = true;
    destroyAndPlayMusic(this, "timewarp");
    artBox(this, 'drr2', 'drr2Anim2');
    initialDialogue(this, 12, "Th-Thank you...... please feed me soup.", "rd");
  }

  update(){
    checkNextScene(this, 2 , "DRR15", "DRR16");
  }
}
