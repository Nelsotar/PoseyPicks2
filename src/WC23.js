class WC23 extends Phaser.Scene{

  constructor(){
    super({key:'WC23'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmf2', 'wcmf2Anim');
    initialDialogue(this, 0, "Which is the best sick face?", "narrator");
  }

  update(){
    displayButtons(this, 2, 'smallButton', 'WC23', ['WC30', 'WC24'], ['A', 'B']);
  }
}
