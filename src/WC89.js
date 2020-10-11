class WC89 extends Phaser.Scene{

  constructor(){
    super({key:'WC89'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcs2', 'wcs2Anim2');
    initialDialogue(this, 19, "...really helpful? I'm not sure he gets it, but thanks for trying so hard for me!", "cookleigh");
  }

  update(){
    checkNextDialogue(this, 2, 1, "I always try my best! Even when I don't know what I'm trying my best to do.", "posey");
    if(this.clickCounter === 4 && !this.activated[0]){
      this.activated[0] = true;
      destroyText(this);
      playEndSound(this, "victory");
      createMultiButtonsEnd(this, 'smallButton', 'WC89', ['x1', 'credits'], ['Restart','Credits']);
    }
  }
}
