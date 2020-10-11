class WC20 extends Phaser.Scene{

  constructor(){
    super({key:'WC20'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyMusic();
    playEndSound(this, "skill2");

    this.artBox = this.add.sprite(0, 0, 'wcmb2').setOrigin(0);
    this.artBox.setFrame(2);
    this.artBox2 = this.add.sprite(0, 0, 'wcmb2').setOrigin(0);
    this.artBox2.setAlpha(0);
    this.artBox2.setFrame(3);

    initialDialogue(this, 26, "Mission successful, Commander Cookleigh!", "posey");

  }

  update(){
    checkNextDialogue(this, 2, 19, "Well done, Lieutenant Posey! And thank you, Cloneleigh, for your selfless bravery.", "cookleigh");
    checkNextDialogue(this, 3, 42, "MramramMRMMm", "cloneleigh");
    checkNextDialogue(this, 4, 19, "I love you too.", "cookleigh");
    if(this.clickCounter === 8 && !this.activated[0]){
      this.activated[0] = true;
      destroyText(this);
      playEndSound(this, "victory");
      createMultiButtonsEnd(this, 'smallButton', 'WC20', ['x1', 'credits'], ['Restart', 'Credits']);
    }

    if(this.artBox2.alpha < 1){
      this.artBox2.setAlpha(this.artBox2.alpha + 0.005);
    }
  }
}
