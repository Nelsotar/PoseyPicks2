class DRR22 extends Phaser.Scene{

  constructor(){
    super({key:'DRR22'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    playEndSound(this, "neigh");
    artBox(this, 'drr2', 'drr2Anim5');
    initialDialogue(this, 26, "HAHA that's right!! I'm never going back to school again,", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 26, "and I'll deal with my future regrets in an unhealthy manner!! Hahaha!!", "posey");
    if(this.clickCounter === 4 && !this.activated[2]){
      this.activated[2] = true;
      destroyText(this);
      playEndSound(this, "victory");
      this.sfx[0].once('complete', ()=>{
        playEndSound(this, "defeat");
        this.sound.play("defeat");
      });

      createMultiButtonsEnd(this, 'smallButton', 'DRR22', ['x1', 'credits'], ['Restart','Credits']);
    }
  }
}
