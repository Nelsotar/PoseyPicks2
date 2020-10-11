class WC98 extends Phaser.Scene{

  constructor(){
    super({key:'WC98'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, "bgm_school");
    artBox(this, 'wc2', 'wc2Anim');
    this.activated[0] = false;
    this.cameras.main.fadeIn(1500);
    this.cameras.main.once("camerafadeincomplete", ()=>{
      this.clickCounter = 0;
      initialDialogue(this, 23, "Ah, hello Posey. And......... Cookleigh.", "salton");
      this.activated[0] = true;
    });
  }

  update(){
    checkNextScene(this, 2, 'WC98', 'WC99', this.activated[0]);
  }
}
