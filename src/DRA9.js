class DRA9 extends Phaser.Scene{

  constructor(){
    super({key:'DRA9'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, 'bgm_interview');
    artBox(this, 'dra4','dra4Anim');
    initialDialogue(this, 9, "Tell me why you would be a good fit for our organization.", "rd");
  }

  update(){
    displayButtons(this, 2, 'smallButton', 'DRA9', ['DRA10', 'DRA13'], ["I'm a team player", "I'm a hard worker"]);
  }
}
