class DRA38 extends Phaser.Scene{

  constructor(){
    super({key:'DRA38'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'dra6e1', 'dra6e1Anim2');
    initialDialogue(this, 5, "When you need to hear the truth about you or your socks,", "fish");
  }

  update(){
    checkNextDialogue(this, 2, 5, "she'll tell you, but in a constructive and diplomatic way. It's really admirable.", "fish");
    checkNextScene(this, 3, 'DRA38','DRA36');
  }
}
