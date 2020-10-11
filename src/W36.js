class W36 extends Phaser.Scene{

  constructor(){
    super({key:'W36'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, 'bgm_cityloop');
    artBox(this, 'wbb1', 'wbb1Anim4');
    initialDialogue(this, 1, "I actually also really like legs!! Look, I read about them and everything.", "posey");
  }

  update(){
    checkNextScene(this, 2, 'W36', 'W37');
  }
}
