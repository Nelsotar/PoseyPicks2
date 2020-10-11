class DRR14 extends Phaser.Scene{

  constructor(){
    super({key:'DRR14'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'drr2', 'drr2Anim');
    initialDialogue(this, 1, "I'm a supernatural being!! I guess!!", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 13, "Oh.", "rd");
    checkNextDialogue(this, 3, 13, "Well, can you care for me in my old age now?", "rd");
    displayButtons(this, 4, 'smallButton', 'DRR14', ['DRR15', 'DRR20'], ["Okay", 'Nah']);
  }
}
