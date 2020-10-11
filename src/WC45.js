class WC45 extends Phaser.Scene{

  constructor(){
    super({key:'WC45'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    playEndSound(this, "defeat");
    artBox(this, 'wcmv2', 'wcmv2Anim4');
    initialDialogue(this, 5, "Haaaaaaaaaa!", "videofish");
  }

  update(){
    if(this.clickCounter === 2 && !this.activated[0]){
      this.activated[0] = true;
      destroyText(this);
      createMultiButtonsEnd(this, 'smallButton', 'WC45', ['x1', 'credits'], ['Restart','Credits']);
    }
  }
}
