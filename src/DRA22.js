class DRA22 extends Phaser.Scene{

  constructor(){
    super({key:'DRA22'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyMusic();
    artBox(this, 'dra10', 'dra10Anim');
    initialDialogue(this, 1, "Alpha & Omega Handshake!!!", "posey");
  }

  update(){
    if(!this.artBox.anims.isPlaying && !this.activated[0]){
      this.bgSound = this.sound.add("skill2");
      this.bgSound.play();
      this.artBox.anims.play("dra10Anim2");
      this.clickCounter = 0;
      this.activated[0] = true;
    }
    else if(this.clickCounter === 2 && this.activated[0]){
      nextScene(this, "DRA20", "DRA21");
    }
  }
}
