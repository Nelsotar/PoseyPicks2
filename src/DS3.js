class DS3 extends Phaser.Scene{

  constructor(){
    super({key:'DS3'});
  }

  preload(){
  }

  create(){
    setUpScene(this);
    this.bgSound = this.sound.add("transform");
    this.bgSound.play({volume: 0.8});
    //forced to watch animation
    this.bgSound.once('complete', ()=>{
      nextScene(this, "DS3", "DS4");
    });
    artBox(this, 'd', 'dAnim3');
    initialDialogue(this, 0, "The bus stop was possessed by the Responsibility Demon!!", "narrator");
  }

  update(){
    if(!this.artBox.anims.isPlaying && !this.activated[0]){
      this.activated[0] = true;
      this.artBox.destroy();
      this.artBox = this.add.sprite(0, 0, 'd2').setOrigin(0);
      this.artBox.anims.play('d2Anim');
    }
    else if(!this.artBox.anims.isPlaying && this.activated[0] && !this.activated[1]){
      this.activated[1] = true;
      this.artBox.anims.play('d2Anim2');
    }
    else if(!this.artBox.anims.isPlaying && this.activated[1] && !this.activated[2]){
      this.activated[2] = true;
      this.artBox.anims.play('d2Anim4');
    }
  }
}
