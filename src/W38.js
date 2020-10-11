class W38 extends Phaser.Scene{

  constructor(){
    super({key:'W38'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, "bgm_legdance");
    this.artBox = this.add.sprite(0,0, 'wbb2').setOrigin(0);

    this.theend = this.add.sprite(1600,680,'theend').setOrigin(0);
    this.theend.anims.play('theendAnim');

    createMultiButtonsEnd(this, 'smallButton', 'W38', ['x1', 'credits'], ['Restart', 'Credits']);
  }

  update(){
    if(!this.artBox.anims.isPlaying && !this.activated[4]){
      this.activated[4] = true;
      this.artBox.anims.play('wbb2Anim4');
    }
    else if(!this.artBox.anims.isPlaying && !this.activated[0] && this.activated[4]){
      this.activated[0] = true;
      this.artBox.anims.play('wbb2Anim5');
    }
    else if(!this.artBox.anims.isPlaying && !this.activated[1] && this.activated[0]){
      this.activated[1] = true;
      this.artBox.anims.play('wbb2Anim6');
    }
    else if(!this.artBox.anims.isPlaying && !this.activated[2] && this.activated[1]){
      this.activated[2] = true;
      this.artBox.anims.play('wbb2Anim7');
    }
    else if(!this.artBox.anims.isPlaying && !this.activated[3] && this.activated[2]){
      this.activated[3] = true;
      this.artBox.anims.play('wbb2Anim8');
    }
    else if(!this.artBox.anims.isPlaying && this.activated[3]){
      this.activated = [];
    }
  }
}
