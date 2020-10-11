class DRR4 extends Phaser.Scene{

  constructor(){
    super({key:'DRR4'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("woop");
    artBox(this, 'drrh1', 'drrh1Anim');
    initialDialogue(this, 0, "Posey hid forever, so nothing will probably happen now. To help her hide even better,", "narrator");
  }

  update(){
    checkNextDialogue(this, 2, 0, "you should clear your browser history so there's no trace of her for the demon to find.", "narrator");
    checkNextDialogue(this, 3, 0, "It is good general practice to do this once in a while anyway, and not just after you look at your weirdo things!", "narrator");
    checkNextScene(this, 4, "DRR4", "DRR5");
  }
}
