class DS14 extends Phaser.Scene{

  constructor(){
    super({key:'DS14'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("launch");
    artBox(this, 'ds4', 'ds4Anim');
    initialDialogue(this, 28, "AUUUUUGHHHHH THAT SOUNDS VALID!!", "rd");
  }

  update(){
    if(!this.artBox.anims.isPlaying && !this.activated[2]){
      this.activated[2] = true;
      this.artBox.anims.play('ds4Anim2', true);
    }
    if(this.artBox.anims.currentFrame.index === 4 && !this.activated[1]){
      this.activated[1] = true;
      this.sound.play("blast");
    }
    if(this.clickCounter >= 2 && !this.activated[3] && this.activated[2]){
      this.activated[3] = true;
      nextScene(this, "DS14", "DS15");
    }
  }
}
