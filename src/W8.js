class W8 extends Phaser.Scene{

  constructor(){
    super({key:'W8'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wb2', 'wb2Anim');
    initialDialogue(this, 15, "Helloooo? Oh maybe you'd talk to me if I were a mop or something, huh? HAHA.", "hb");
  }

  update(){
    displayButtons(this, 2, 'smallButton', 'W8', ['W28', 'W9'], ['Shut up, Hot Bear!!', '(Ignore him)']);
  }
}
