class DS4 extends Phaser.Scene{

  constructor(){
    super({key:'DS4'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'd2','d2Anim4');
    initialDialogue(this, 10, "Come back, small child!! You must continue your education!!", "rd");
  }

  update(){
    displayButtons(this, 2, 'smallButton', 'DS4', ['DR', 'DS8'], ['Run away', 'Stand your ground']);
  }
}
