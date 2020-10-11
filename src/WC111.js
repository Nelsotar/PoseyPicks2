class WC111 extends Phaser.Scene{

  constructor(){
    super({key:'WC111'});
  }

  preload(){

  }

  create(){
    destroyAndPlayMusic(this, "bgm_slowfuture");
    setUpScene(this);
    artBox(this, 'wcmf5', 'wcmf5Anim4');
    initialDialogue(this, 20, "Well, at least we told the truth.", "cookleigh");
  }

  update(){
    checkNextDialogue(this, 2, 2, "And we'll never lie to a vehicle again. ", "posey");
    if(this.clickCounter == 4 && !this.activated[0]){
      this.activated[0] = true;
      destroyText(this);
      playEndSound(this, "victory");
      this.time.addEvent({delay: 1500, repeat: false, callbackScope: this, callback:()=>{
        playEndSound(this, "defeat");
      }});
      createMultiButtonsEnd(this, 'smallButton', 'WC111', ['x1', 'credits'], ['Restart','Credits']);
    }
  }
}
