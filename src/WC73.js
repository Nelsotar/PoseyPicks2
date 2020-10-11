class WC73 extends Phaser.Scene{

  constructor(){
    super({key:'WC73'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcl1', 'wcl1Anim');
    initialDialogue(this, 1, "Maybe I can help! I know a calming exercise that might work.", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 40, "Oh, what do I do?", "cookleigh");
    checkNextScene(this, 3, 'WC73', 'WC74');
  }
}
