class WC95 extends Phaser.Scene{

  constructor(){
    super({key:'WC95'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyMusic();
    playEndSound(this, "victory");
    artBox(this, 'wcs1', 'wcs1Anim5');
    initialDialogue(this, 39, "What an amazing display of consciousness!!!", "salton");
  }

  update(){
    if(this.clickCounter === 2 && !this.activated[0]){
      this.activated[0] = true;
      destroyText(this);

      createMultiButtonsEnd(this, 'smallButton', 'W27', ['x1', 'credits'], ['Restart','Credits']);
    }
  }
}
