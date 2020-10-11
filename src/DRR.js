class DRR extends Phaser.Scene{

  constructor(){
    super({key:'DRR'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'drr1', 'drr1Anim');
    initialDialogue(this, 11, "What the heck...? Where are you, child?!", "rd");
  }

  update(){
    checkNextDialogue(this, 2, 0, "Posey was a master of stealth, but because the Responsibility Demon was so responsible,", "narrator");
    checkNextDialogue(this, 3, 0, "they continued to search for 1000 years.", "narrator");
    checkNextScene(this, 4, "DRR", "DRR2");
  }
}
