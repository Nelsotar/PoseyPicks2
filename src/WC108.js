class WC108 extends Phaser.Scene{

  constructor(){
    super({key:'WC108'});
  }

  preload(){

  }

  create(){
    destroyAndPlayMusic(this, "bgm_slowfuture");
    setUpScene(this);
    artBox(this, 'wcmf6', 'wcmf6Anim4');
    initialDialogue(this, 3, "This doesn't seem that different from regular detention.", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 19, "There's a clown on the floor though.", "cookleigh");
    if(this.clickCounter == 4 && !this.activated[0]){
      this.activated[0] = true;
      destroyText(this);
      playEndSound(this, "victory");
      this.time.addEvent({delay: 1500, repeat: false, callbackScope: this, callback:()=>{
        playEndSound(this, "defeat");
      }});
      createMultiButtonsEnd(this, 'smallButton', 'WC108', ['x1', 'credits'], ['Restart','Credits']);
    }
  }
}
