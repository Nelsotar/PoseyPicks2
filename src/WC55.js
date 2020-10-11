class WC55 extends Phaser.Scene{

  constructor(){
    super({key:'WC55'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.rumble = this.sound.add('rumble');
    this.rumble.play();
    artBox(this, 'wcmr1', 'wcmr1Anim2');
  }

  update(){
    if(this.artBox.anims.currentFrame.index === 6 && !this.activated[0]){
      this.rumble.stop();
      this.sound.play("pop");
      this.activated[0] = true;
      this.clickCounter = 0;
      this.artBox.anims.play("wcmr1Anim4");
      initialDialogue(this, 41, "Y'all are so nice. I hope you get every single thing you want out of life.", "rock");
    }
    if(this.clickCounter === 2 && this.activated[0]){
      nextScene(this, 'WC55', 'WC56');
    }
  }
}
