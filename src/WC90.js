class WC90 extends Phaser.Scene{

  constructor(){
    super({key:'WC90'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcs2', 'wcs2Anim3');
    initialDialogue(this, 19, "...really helpful! Thanks, you're the best!!", "cookleigh");
  }

  update(){
    checkNextDialogue(this, 2, 23, "I need a new job.", "salton");
    if(this.clickCounter === 4 && !this.activated[0]){
      this.activated[0] = true;
      destroyText(this);
      playEndSound(this, "victory");
      createMultiButtonsEnd(this, 'smallButton', 'WC90', ['x1', 'credits'], ['Restart','Credits']);
    }
  }
}
