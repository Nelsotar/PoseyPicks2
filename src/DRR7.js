class DRR7 extends Phaser.Scene{

  constructor(){
    super({key:'DRR7'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'drr1', 'drr1Anim5');
    initialDialogue(this, 31, "What?!?!?! And you haven't aged a day!? How?!?!", "rd");
  }

  update(){
    displayButtons(this, 2, 'largeButton', 'DRR7', ['DRR14', 'DRR8'], ["I'm a supernatural being!", 'I dunno']);
  }
}
