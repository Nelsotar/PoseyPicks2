class WC18 extends Phaser.Scene{

  constructor(){
    super({key:'WC18'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, "bgm_school");
    artBox(this, 'wcmb2', 'wcmb2Anim4');
    this.cameras.main.fadeIn(1500);
    this.activated[0] = false;
    this.cameras.main.once('camerafadeincomplete', ()=>{
      this.clickCounter = 0;
      initialDialogue(this, 23, "Hello Posey. And... um... is that Cookleigh?", "narrator");
      this.activated[0] = true;
    });
  }

  update(){
    checkNextDialogue(this, 2, 42, "No. Help me.", "cloneleigh", this.activated[0]);
    checkNextScene(this, 3, 'WC18', 'WC19', this.activated[0]);
  }
}
