class WC97 extends Phaser.Scene{

  constructor(){
    super({key:'WC97'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wc2', 'wc2Anim3');
    initialDialogue(this, 19, "You're right... I think I will. Thanks, Posey!", "cookleigh");
  }

  update(){
    if(this.clickCounter === 2 && !this.activated[0]){
      this.activated[0] = true;
      this.sound.play("horn");
      nextDialogue(this, 32, "We've arrived! Everybody please carefully exit my skeleton.", "bus");
    }
    if(this.clickCounter === 4 && !this.activated[1]){
      this.activated[1] = true;
      destroyText(this);
      this.sound.play("textProceed");
      let button = this.add.sprite(24,725, "largeButton").setOrigin(0);
      buttonFadeFunction(button, this, 'WC97', 'WC98', 'Leave the bus');
    }
  }
}
