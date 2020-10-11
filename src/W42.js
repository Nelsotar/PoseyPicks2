class W42 extends Phaser.Scene{

  constructor(){
    super({key:'W42'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wbbt', 'wbbtAnim');
    this.artBox2 = this.add.sprite(0,0,"x1").setOrigin(0);
    this.artBox2.setAlpha(0);
  }

  update(){
    if(this.artBox.anims.currentFrame.index === 9 && !this.activated[0]){
      this.artBox2.setAlpha(1);
      this.artBox2.anims.play("x1Anim3");
    }
    if(!this.artBox.anims.isPlaying && !this.activated[0]){
      this.activated[0] = true;
      this.clickCounter = 0;

      initialDialogue(this, 0, "Posey tried to tackle Hot Bear, but his powerful legs kept him in place!", "narrator");
    }
    if(this.artBox.anims.currentFrame.index === 2 && !this.activated[1]){
      this.activated[1] = true;
      this.sound.play('punch');
    }
    if(this.artBox.anims.currentFrame.index === 9 && !this.activated[2]){
      this.activated[2] = true;
      this.sound.play('bop');
    }
    if(this.clickCounter === 2 && this.activated[0]){
      nextScene(this, 'W42', 'W31');
    }
  }
}
