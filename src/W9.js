class W9 extends Phaser.Scene{

  constructor(){
    super({key:'W9'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wb2', 'wb2Anim2');
    initialDialogue(this, 16, "It's sad, really. You don't have any friends, do you Posey??", "hb");
  }

  update(){
    displayButtons(this, 2, 'smallButton', 'W9', ['W28', 'W10'], ['Shut up, Hot Bear!!', '(Ignore him)']);
  }
}
