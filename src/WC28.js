class WC28 extends Phaser.Scene{

  constructor(){
    super({key:'WC28'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play('transport');
    artBox(this, 'wcmft', 'wcmft1Anim');
  }

  update(){
    if(!this.artBox.anims.isPlaying && !this.activated[0]){
      this.activated[0] = true;
      this.artBox.anims.play('wcmft1Anim2');
    }
    else if(!this.artBox.anims.isPlaying && this.activated[0] && !this.activated[2]){
      this.activated[2] = true;
      this.artBox.anims.play('wcmft1Anim3');
    }
    if(this.activated[2] && !this.activated[3]){
      this.activated[3] = true;
      destroyAndPlayMusic(this, "bgm_school");
      this.clickCounter = 0;
      initialDialogue(this, 3, "Aw, no one's even here yet.", 'posey');
    }
    if(this.clickCounter === 2 && this.activated[3]){
      nextScene(this, 'WC28', 'WC29');
    }
  }
}
