class WC11 extends Phaser.Scene{

  constructor(){
    super({key:'WC11'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmb2', 'wcmb2Anim');
    initialDialogue(this, 20, "Uhh... maybe I should take Cloneleigh home and tell my mom.", "cookleigh");
  }

  update(){
    if(this.clickCounter === 2 && !this.activated[1]){
      this.activated[1] = true;
      this.sound.play("horn");
      nextDialogue(this, 33, "Next stop, Cookleigh's house for family cloning emergency!", "bus");
    }
    if(this.clickCounter === 4 && !this.activated[0]){
      this.activated[0] = true;
      this.sound.play("textProceed");
      this.cameras.main.fadeOut(1500);
      this.cameras.main.on('camerafadeoutcomplete', () => {
        nextScene(this, 'WC11', 'WC12');
      });
    }
  }
}
