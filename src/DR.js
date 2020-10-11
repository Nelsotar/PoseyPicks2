
class DR extends Phaser.Scene{

  constructor(){
    super({key:'DR'});
  }

  preload(){

  }

  create(){

    setUpScene(this);
    destroyAndPlayMusic(this, 'bgm_hiding');

    artBox(this, 'dr1', 'dr1Anim');
    initialDialogue(this, 4, "Noooo! Don't prepare me for my future!!!!", "posey");
  }

  update(){
   checkNextScene(this, 2, "DR", "DR2");
  }
}
