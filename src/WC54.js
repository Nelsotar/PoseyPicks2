class WC54 extends Phaser.Scene{

  constructor(){
    super({key:'WC54'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, 'bgm_slowfuture');
    this.cameras.main.fadeIn(2500);
    this.cameras.main.once('camerafadeincomplete', () => {
      this.activated[0] = true;
      this.clickCounter = 0;
    });
    artBox(this, 'wcmr1', 'wcmr1Anim');
  }

  update(){
    if(this.activated[0] && !this.activated[1]){
      this.activated[1] = true;
      initialDialogue(this, 0, "Posey and Cookleigh stood behind a rock and looked at it!", "narrator");
    }
    if(this.clickCounter === 2 && this.activated[0] && !this.activated[2]){
      this.activated[2] = true;
      nextDialogue(this, 1, "This is a fun rock.", 'posey');
    }
    if(this.clickCounter === 4 && this.activated[0] && !this.activated[3]){
      this.activated[3] = true;
      nextDialogue(this, 19, "Yeah.", 'cookleigh');
    }
    if(this.clickCounter === 6 && this.activated[0]){
      nextScene(this, 'WC54', 'WC55');
    }
  }
}
