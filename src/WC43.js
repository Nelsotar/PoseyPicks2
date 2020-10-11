class WC43 extends Phaser.Scene{

  constructor(){
    super({key:'WC43'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmv2', 'wcmv2Anim');
    initialDialogue(this, 2, "Ahh I'm sorry, video, we don't have time to watch all of you right now!", "posey");
  }

  update(){
    if(this.clickCounter === 2 && !this.activated[0]){
      this.activated[0] = true;
      this.sound.play('horn');
      nextDialogue(this, 32, "We've arrived! Everybody please carefully exit my skeleton.", 'bus');
    }
    if(this.clickCounter === 4 && !this.activated[1]){
      this.activated[1] = true;
      this.sound.play("textProceed");
      this.cameras.main.fadeOut(1500);
      this.cameras.main.once('camerafadeoutcomplete', ()=>{
        nextScene(this, 'WC43', 'WC44', false);
      })
    }
  }
}
