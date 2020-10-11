class WC61 extends Phaser.Scene{

  constructor(){
    super({key:'WC61'});
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
    artBox(this, 'wcms1', 'wcms1Anim');
  }

  update(){
    if(this.activated[0] && !this.activated[1]){
      this.activated[1] = true;
      initialDialogue(this, 0, "Posey and Cookleigh went to Stophanie's house!", "narrator");
    }
    if(this.clickCounter === 2 && this.activated[0] && !this.activated[2]){
      this.activated[2] = true;
      nextDialogue(this,38, "Hello friends! Thanks for...", 'stophanie');
    }
    if(this.clickCounter === 4 && this.activated[0] && !this.activated[3]){
      this.activated[3] = true;
      nextDialogue(this, 38, "STOPPING by!", 'stophanie');
    }
    if(this.clickCounter === 6 && this.activated[0]){
      nextScene(this, 'WC61', 'WC62');
    }
  }
}
