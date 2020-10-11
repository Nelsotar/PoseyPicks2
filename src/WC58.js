class WC58 extends Phaser.Scene{

  constructor(){
    super({key:'WC58'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("horn");
    artBox(this, 'wcm6', 'wcm6Anim2');
    initialDialogue(this, 32, "We've arrived! Everybody please carefully exit my skeleton.", "bus");
  }

  update(){
    if(this.clickCounter === 2 && !this.activated[0]){
      this.activated[0] = true;
      this.cameras.main.fadeOut(1500);
      this.cameras.main.once('camerafadeoutcomplete', ()=>{
        nextScene(this, 'WC58', 'WC59');
      });
    }

  }
}
