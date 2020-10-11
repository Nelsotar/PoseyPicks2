class DS27 extends Phaser.Scene{

  constructor(){
    super({key:'DS27'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, 'bgm_waiting');
    artBox(this, 'ds2', 'ds2Anim3');
    initialDialogue(this, 9, "You are so responsible, eating vegetables and taking care of your digestive system like that!", "rd");
  }

  update(){
    checkNextDialogue(this, 2, 9, "I see that you do not need my help. I will leave now!", "rd");
    checkNextScene(this, 3, "DS27", "DS28");
  }
}
