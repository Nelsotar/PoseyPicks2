class WC77 extends Phaser.Scene{

  constructor(){
    super({key:'WC77'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("woop");
    artBox(this, 'wcl2', 'wcl2Anim');
  }

  update(){
    if(!this.artBox.anims.isPlaying && !this.activated[0]){
      this.activated[0] = true;
      this.artBox.anims.play("wcl2Anim2");
      this.clickCounter = 0;
      initialDialogue(this, 19, "Ahh, I feel so much better. Thank you, Posey!", "cookleigh");
    }

    if(this.clickCounter === 2 && this.activated[0] && !this.activated[1]){
      this.activated[1] = true;
      nextDialogue(this, 1, "No problung!", "posey");
    }
    if(this.clickCounter === 4 && this.activated[0]){
      nextScene(this, 'WC77', 'WC78');
    }
  }
}
