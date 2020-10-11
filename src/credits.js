class credits extends Phaser.Scene{

  constructor(){
    super({key:'credits'});
  }

  preload(){

  }

  create(){
    destroyAndPlayMusic(this, "bgm_credits");
    setUpScene(this);
    this.artBox = this.add.sprite(0,0,"credits").setOrigin(0);
  }

  update(){
    if(this.clickCounter === 0 && !this.activated[4]){
      this.sound.play("textProceed");
      this.activated[4] = true;
      this.artBox.anims.play("creditsAnim");
    }
    if(this.clickCounter === 1 && !this.activated[0]){
      this.sound.play("textProceed");
      this.activated[0] = true;
      this.artBox.anims.play("creditsAnim2");
    }
    else if(this.clickCounter === 2 && !this.activated[1]){
      this.sound.play("textProceed");
      this.activated[1] = true;
      this.artBox.anims.play("creditsAnim3");
    }
    else if(this.clickCounter === 3 && !this.activated[2]){
      this.sound.play("textProceed");
      this.activated[2] = true;
      this.artBox.anims.play("creditsAnim4");
    }
    else if(this.clickCounter === 4 && !this.activated[3]){
      this.sound.play("textProceed");
      this.activated[3] = true;
      this.artBox.anims.play("creditsAnim5");
    }
    else if(this.clickCounter === 5){
      nextScene(this, 'credits', 'TitleScreen');
    }
  }
}
