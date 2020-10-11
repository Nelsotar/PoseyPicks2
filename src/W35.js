class W35 extends Phaser.Scene{

  constructor(){
    super({key:'W35'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyMusic();
    playEndSound(this, "battlevictory");
    artBox(this, 'wbb3', 'wbb3Anim3');
    initialDialogue(this, 0, "Posey was victorious!", "narrator");
  }

  update(){
    checkNextDialogue(this, 2, 17, "Alright, alright. I'll leave you alone.", "hb");
    if(this.clickCounter === 4 && !this.activated[0]){
      this.activated[0] = true;
      destroyText(this);
      createMultiButtonsEnd(this, 'smallButton', 'W35', ['x1', 'credits'], ['Restart', 'Credits']);
    }
  }
}
