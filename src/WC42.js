class WC42 extends Phaser.Scene{

  constructor(){
    super({key:'WC42'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmv2', 'wcmv2Anim3');
    initialDialogue(this, 0, "And so Posey and Cookleigh stayed awake for the rest of the day, and the rest of their lives.", 'narrator');
  }

  update(){
    if(this.clickCounter === 2 && !this.activated[0]){
      this.activated[0] = true;
      destroyText(this);
      playEndSound(this, "defeat");
      createMultiButtonsEnd(this, 'smallButton', 'WC42', ['x1', 'credits'], ['Restart','Credits']);
    }
  }
}
