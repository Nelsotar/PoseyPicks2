class WC71 extends Phaser.Scene{

  constructor(){
    super({key:'WC71'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wc1', 'wc1Anim2');
    initialDialogue(this, 2, "Why not? You don't like school?", "posey");
  }

  update(){
    checkNextPicDialogue(this, 2, 'wc1', 'wc1Anim3', 20, "I like it! ...But today I just feel really nervous.", "cookleigh");
    displayButtons(this, 3 , 'largeButton', 'WC71', ['WC79', 'WC73'], ["What's making you nervous?", "I'll help you stay calm!"]);
  }
}
