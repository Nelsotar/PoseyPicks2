class WC48 extends Phaser.Scene{

  constructor(){
    super({key:'WC48'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    playEndSound(this, "zzz");
    this.sfx[0].setLoop(true);

    artBox(this, 'wcmv2', 'wcmv2Anim5');

    initialDialogue(this, 0, "Oops! Fish's video didn't quite work,", "narrator");
  }

  update(){
    checkNextDialogue(this, 2, 0, "but at least Posey & Cookleigh enjoyed a relaxing nap before school.", "narrator");
    if(this.clickCounter === 4 && !this.activated[0]){
      this.activated[0] = true;
      destroyMusic();
      destroyText(this);
      playEndSound(this, "lullaby");
      createMultiButtonsEnd(this, 'smallButton', 'WC48', ['x1','credits'], ['Restart', 'Credits']);
    }

  }
}
