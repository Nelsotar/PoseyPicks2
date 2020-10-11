class DS18 extends Phaser.Scene{

  constructor(){
    super({key:'DS18'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'ds3', 'ds3Anim3');
    initialDialogue(this, 10, "Ha!! That's no excuse!!", "rd");
  }

  update(){
    if(this.artBox.anims.currentFrame.index === 1 && !this.activated[0]){
      this.activated[0] = true;
      this.sound.play("launch");
    }
    if(!this.artBox.anims.isPlaying && !this.activated[2]){
      this.activated[2] = true;
      this.artBox.anims.play('ds3Anim4', true);
    }
    else if(this.artBox.anims.currentFrame.index === 5 && !this.activated[1]){
      this.activated[1] = true;
      this.sound.play("punch");
    }
    if(this.clickCounter >= 2 && this.activated[2]){
      nextScene(this, "DS18", "DS19");
    }
  }
}
