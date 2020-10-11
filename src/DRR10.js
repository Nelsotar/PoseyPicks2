class DRR10 extends Phaser.Scene{

  constructor(){
    super({key:'DRR10'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, "bgm_scary");
    artBox(this, 'drr4', 'drr4Anim3');
    this.cameras.main.fadeIn(2000);
    this.cameras.main.once('camerafadeincomplete', () => {
      this.clickCounter = 0;
      initialDialogue(this, 0, "...but the nature of reality had changed in the last 1000 years.", "narrator");
      this.activated[1] = true;
    });
  }

  update(){
    if(this.activated[1] && this.clickCounter === 2 && !this.activated[2]){
      this.activated[2] = true;
      nextDialogue(this, 3, "This is creepy... I don't like this reality...", "posey");
    }
     if(this.activated[1] && this.clickCounter === 4){
       nextScene(this, "DRR10", "DRR11");
     }
  }
}
