class WC12 extends Phaser.Scene{

  constructor(){
    super({key:'WC12'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, "bgm_school");
    artBox(this, 'wcmb2', 'wcmb2Anim2');
    this.activated[0] = false;
    this.cameras.main.fadeIn(1500);
    this.cameras.main.once('camerafadeincomplete', () => {
      this.clickCounter = 0;
      initialDialogue(this, 19, "Mom I made a clone of myself by accident. Can we keep her?", "cookleigh");
      this.activated[0] = true;
    });

  }

  update(){
    checkNextDialogue(this, 2, 43, "Er... okay, sweetie.", "cookleighmom", this.activated[0]);
    checkNextScene(this, 3, 'WC12', 'WC13', this.activated[0]);
  }
}
