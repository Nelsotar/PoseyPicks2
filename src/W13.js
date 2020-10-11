class W13 extends Phaser.Scene{

  constructor(){
    super({key:'W13'});
  }

  preload(){

  }

  create(){
    setUpScene(this);

    this.sound.play('whoosh');
    this.bg = this.add.sprite(0,0,'wb3IgnoreBg').setOrigin(0);

    artBox(this, 'wb3IgnorePo', 'wb3IgnorePoAnim');
    this.artBox.setDepth(1);

    initialDialogue(this, 0, "Posey ignored everyone and everything. She was unmoved and unshakable.", "narrator")
  }

  update(){
    if(this.bg.alpha > 0 && !this.activated[0] ){
      this.bg.setAlpha(this.bg.alpha - 0.01);
    }
    else if(this.bg.alpha <= 0 && !this.activated[0]){
      this.activated[0] = true;
      this.bg.destroy();
      this.bg2 = this.add.sprite(0,0, 'wb3IgnoreBub').setOrigin(0);
      this.bg2.anims.play('wb3IgnoreBubAnim');
      this.bg2.setAlpha(0);
      this.bg2.setDepth(0);
    }
    else if(this.bg2.alpha < 1){
      this.bg2.setAlpha(this.bg2.alpha + 0.01);
    }
    else if(this.bg2.alpha === 1 && !this.activated[4]){
      this.activated[4] = true;
    }
    checkNextDialogue(this, 2, 0, "The world around her became a quiet, empty, bunny bubble.", "narrator");

    if(this.clickCounter >= 4 && !this.activated[2] && this.activated[4]){
      this.activated[2] = true;
      this.clickCounter = 4;
      nextDialogue(this, 1, "I like it here.", "posey");
    }
    if(this.clickCounter === 6 && !this.activated[3] && this.activated[2]){
      this.activated[3] = true;
      destroyText(this);
      playEndSound(this, "victory");
      this.end = this.add.sprite(1415,570,'wb3IgnoreEnd').setOrigin(0);
      this.end.anims.play('wb3IgnoreEndAnim');

      createMultiButtonsEnd(this, 'smallButton', 'W13', ['x1', 'credits'], ['Restart', 'Credits']);
    }
  }
}
