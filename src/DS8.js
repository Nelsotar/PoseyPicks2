class DS8 extends Phaser.Scene{

  constructor(){
    super({key:'DS8'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, "bgm_hiding");
    artBox(this, 'dr1', 'dr1Anim');
    initialDialogue(this, 3, "Noooo! Don't prepare me for my future!!!!", "posey");
  }

  update(){
    checkNextScene(this, 2, "DS8", "DS9");
  }
}
