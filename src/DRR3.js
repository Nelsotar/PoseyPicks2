class DRR3 extends Phaser.Scene{

  constructor(){
    super({key:'DRR3'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, "bgm_slowfuture");
    artBox(this, 'drr1', 'drr1Anim2');
    initialDialogue(this, 14, "Please... come back... I... just want.... what's best for you...", "rd");
  }

  update(){
    displayButtons(this, 2, 'smallButton', 'DRR3', ['DRR6', 'DRR4'], ['Stop hiding', 'Hide forever']);
  }
}
