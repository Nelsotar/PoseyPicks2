class WC83 extends Phaser.Scene{

  constructor(){
    super({key:'WC83'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, 'bgm_school');
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
    checkNextDialogue(this, 2, 2, "Mr. Salton...", "posey", this.activated[0]);
    displayButtons(this, 3, 'largeButton', 'WC83', ['WC91', 'WC84'], ['We need to talk', 'Yo stop being like that'], this.activated[0]);
  }
}
