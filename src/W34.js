class W34 extends Phaser.Scene{

  constructor(){
    super({key:'W34'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wbb2', 'wbb2Anim');
    this.sound.play("beep");
  }

  update(){
    if(!this.artBox.anims.isPlaying){
      this.artBox.anims.play('wbb2Anim2', true);
      this.activated[1] = true;
      this.clickCounter = 0;
      initialDialogue(this, 0, "Weak-points located!! Posey attacks!!", "narrator");
    }
    if(this.clickCounter == 2 && this.activated[1]){
      nextScene(this, 'W34', 'W43');
    }
  }
}
