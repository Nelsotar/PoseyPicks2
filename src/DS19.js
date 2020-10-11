class DS19 extends Phaser.Scene{

  constructor(){
    super({key:'DS19'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, "bgm_school");
    artBox(this, 'ds5', 'ds5Anim2');
    initialDialogue(this, 0, "Responsibility Demon used gentle nag!!", "narrator");
  }

  update(){
    checkNextDialogue(this, 2, 9, "Please go to school. I know it's frustrating sometimes, but it really will help you grow and learn.", "rd");
    checkNextScene(this, 3, "DS19", "DS20");
  }
}
