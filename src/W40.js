class W40 extends Phaser.Scene{

  constructor(){
    super({key:'W40'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, 'bgm_broom');
    artBox(this, 'wb2', 'wb2Anim2');
    initialDialogue(this, 16, "You're so sad, Posey, talking to a broom!! You don't have any friends, do you?", "hb");
  }

  update(){
    displayButtons(this, 2, 'smallButton', 'W40', ['W41', 'W10'], ['Shut up, Hot Bear!!', '(Ignore him)']);
  }
}
