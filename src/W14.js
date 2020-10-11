class W14 extends Phaser.Scene{

  constructor(){
    super({key:'W14'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, 'bgm_school');
    artBox(this, 'wb3', 'wb3Anim2');
    initialDialogue(this, 1, "Thanks for the help, Cookleigh. I really appreciate it.", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 19, "No problem, Posey. Don't worry about him, it's super normal to talk to brooms.", "cookleigh");
    checkNextScene(this, 3, 'W14', 'W15');
  }
}
