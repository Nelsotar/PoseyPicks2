class WC17 extends Phaser.Scene{

  constructor(){
    super({key:'WC17'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("horn");
    artBox(this, 'wcmb1', 'wcmb1Anim3');
    initialDialogue(this, 32, "We've arrived! Everybody please carefully exit my skeleton.", "bus");
  }

  update(){
    checkNextDialogue(this, 2, 1, "Showtime, little Cloneleigh!", "posey");
    if(this.clickCounter === 4 && !this.activated[0]){
      this.activated[0] = true;
      this.sound.play("textProceed");
      this.cameras.main.fadeOut(1500);
      this.cameras.main.once('camerafadeoutcomplete', ()=>{
        nextScene(this, 'WC17', 'WC18');
      });
    }
  }
}
