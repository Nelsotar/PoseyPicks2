class W10 extends Phaser.Scene{

  constructor(){
    super({key:'W10'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wb2', 'wb2Anim3');
    initialDialogue(this, 17, "It's okay. I don't have friends either, because of my personality.", "hb");
  }

  update(){
    displayButtons(this, 2, 'largeButton', 'W10', ['W18', 'W11'], ['...Shut up, Hot Bear??', '(Ignore him)']);
  }
}
